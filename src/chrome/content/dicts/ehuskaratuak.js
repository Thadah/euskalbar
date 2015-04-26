/*
 * Euskalbar - A Firefox extension for helping in Basque translations.
 * Copyright (C) 2013 Euskalbar Taldea (see AUTHORS file)
 *
 * This file is part of Euskalbar.
 *
 * Euskalbar is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

if (!euskalbar) var euskalbar = {};

if (!euskalbar.dicts) euskalbar.dicts = {};

euskalbar.dicts.ehuskaratuak = function () {

  return {
    displayName: 'EHUskaratuak',
    description: 'EHUskaratuak, EHUren itzulpen-memoriak',

    homePage: 'http://ehuskaratuak.ehu.es/',

    pairs: ['eu-es', 'eu-en', 'eu-fr',
            'es-eu', 'fr-eu', 'en-eu'],

    method: 'POST',

    getUrl: function (opts) {
      return 'http://ehuskaratuak.ehu.es/bilaketa/';
    },

    getParams: function (opts) {
      return {
        'mota': 'arrunta',
        'hizkuntza': opts.source,
        'formalema': 'lema',
        'testuhitza': opts.term,
        'kategoria': '',
        'alor': 'guz',
        'azpialor': 'guz',
        'aurreratua': 'arrunta',
        'hizkuntza2': opts.target,
        'formalema2': 'forma',
        'testuhitza2': '',
        'kategoria2': '',
        'distantzia': '0',
        'emaitza': opts.target,
        'grafauk': '1forma',
        'grafiko_aukerak': '1forma'
      };

    },

  };

}();
