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

euskalbar.dicts.jakinbai = function () {

  var $ = euskalbar.lib.utils.$;

  return {
    displayName: 'Jakinbai',
    description: 'Jakinbai lanbide heziketarako hiztegia',

    homePage: 'http://jakinbai.eu/hiztegia',

    pairs: ['eu-es', 'es-eu'],

    method: 'GET',

    getUrl: function (opts) {
      return 'http://jakinbai.eu/hiztegia';
    },

    getParams: function (opts) {
      return null;
    },

    postQuery: function (opts) {
      var i = 0;
      switch (opts.source) {
        case 'eu':
          i = 0;
          break;
        case 'es':
          i = 1;
          break;
      }

      $('field-bilatu', doc).value = opts.term;
      $('selectHizkuntza', doc).selectedIndex = i;
      $('bot_bilatu', doc).click();
    },

  };

}();
