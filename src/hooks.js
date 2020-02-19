import {rest} from "@karpeleslab/klbfw";
import React from "react";
import {useVar, usePromise, Context} from "./ssr";

// this performs get requests
export function useRest(path, params, noThrow) {
	// ensure params is a string
	switch(typeof params) {
	case "string":
		break;
	case "undefined":
		params = "";
		break;
	default:
		params = JSON.stringify(params);
	}

	const [v, setV] = useVar(path+"?"+params, null);

	const ctx = React.useContext(Context);
	if (!ctx.hasOwnProperty("@rest")) {
		ctx["@rest"] = {};
	}
	const rest = ctx["@rest"];

	if (!rest.hasOwnProperty(path+"?"+params)) {
		let restData = {
			path: path,
			params: params,
			set: setV
		};
		ctx[path+"?"+params] = restData;

		restData.refresh = (background) => {
			let prom = rest(restData.path, "GET", restData.params);

			prom.then(res => restData.set({value: res})).catch(e => restData.set({error: e}));

			if (background !== true) {
				restData.set(null);
			}
			return prom;
		};

		// only trigget API call if we do not have a value yet
		if (v == null) {
			usePromise(restData.refresh());
			doReload = false;
		}
	} else {
		let restData = rest[path+"?"+params];
	}

	if (v == null) {
		return [null, restData.refresh];
	}

	if (v.error) {
		if (noThrow === true) {
			// this is used so that refresh() can be accessed
			return [false, restData.refresh];
		}
		throw v.error;
	}

	return [v.value, restData.refresh];
}
