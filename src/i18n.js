import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Backend } from '@karpeleslab/i18next-klb-backend';
import { getLocale } from "@karpeleslab/klbfw";

let initOptions = {
	ns: ['translation'],
	defaultNS: 'translation',
	debug: false,
	lng: getLocale(),
	initImmediate: false,
	load: 'currentOnly',
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
	react: {
		useSuspense: false,
	}
}

export const i18nPromise = i18n
	// load translation using klb system
	// learn more: https://github.com/KarpelesLab/i18next-klb-backend
	.use(Backend)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init(initOptions);

