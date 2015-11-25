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

euskalbar.dicts.adorez = function () {

  return {
    displayName: 'Adorez sin.',
    description: 'Adorez sinonimoen hiztegia',
    contextCategory: 'context.Synonyms',

    homePage: 'http://www.bostakbat.org/azkue/index.php?q=1',

    method: 'GET',

    mimeType: "text/html; charset=UTF8",

    getUrl: function (opts) {
      return 'http://www.bostakbat.org/azkue/index.php';
    },

    getParams: function (opts) {
      return {
        't': opts.term,
        'q': '1'
      };
    },

    scrap: function (data, opts) {
      var data = data.substring(data.indexOf('<div id="emaitza">'),
                                data.indexOf('<div id="oina">'));
      data = data.replace(/<img/g, "<img height='16' width='16'");
      return data;
    },

  };

}();
