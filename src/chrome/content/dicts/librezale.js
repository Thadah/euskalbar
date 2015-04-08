/*
 * Euskalbar - A Firefox extension for helping in Basque translations.
 * Copyright (C) 2015 Euskalbar Taldea (see AUTHORS file)
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

euskalbar.dicts.librezale = function () {

  return {
    displayName: 'Librezale',
    description: 'Librezale posta-zerrendako artxiboa',

    homePage: 'http://librezale.eus/pipermail/librezale/',

    method: 'GET',

    getUrl: function (term, source, target) {
      return 'https://www.google.com/search';
    },

    getParams: function (term, source, target) {
      return {
        'q': term + ' site:http://librezale.eus/pipermail/librezale/'
      };
    },

  };

}();
