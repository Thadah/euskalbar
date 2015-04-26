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

euskalbar.dicts.mokoroa = function () {

  return {
    displayName: 'Mokoroa',
    description: 'Mokoroaren datu-basea',

    homePage: 'http://www.hiru.com/hirupedia',

    pairs: ['eu-es',
            'es-eu'],

    method: 'GET',

    getUrl: function (opts) {
      return 'http://www.hiru.com/hirupedia';
    },

    getParams: function (opts) {
      var params = {
        'p_p_id': 'indice_WAR_w25cIndexWAR_INSTANCE_zPs2',
        'p_p_lifecycle': '1',
        'p_p_state': 'normal',
        'p_p_mode': 'view',
        'p_p_col_id': 'column-1',
        'p_p_col_pos': '1',
        'p_p_col_count': '2',
        '_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_action': 'buscarMokoroa',
        '_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_mokoroaDialecto': 'Edozein Euskalki'
      };

      if (opts.source === 'es') {
        params['_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_mokoroaTextoCastellano'] = opts.term;
      } else {
        params['_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_mokoroaTextoEuskera'] = opts.term;
      }

      return params;
    },

    scrap: function (data, opts) {
      return data.substring(data.indexOf('<font color'),
                            data.indexOf('<div id="justo_mokoroa">'));
    },

  };

}();
