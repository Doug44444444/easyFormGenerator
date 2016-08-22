!function(e){function r(e, r, o){return 4 === arguments.length?t.apply(this, arguments):void n(e, {declarative:!0, deps:r, declare:o})}function t(e, r, t, o){n(e, {declarative:!1, deps:r, executingRequire:t, execute:o})}function n(e, r){r.name = e, e in p || (p[e] = r), r.normalizedDeps = r.deps}function o(e, r){if (r[e.groupIndex] = r[e.groupIndex] || [], - 1 == v.call(r[e.groupIndex], e)){r[e.groupIndex].push(e); for (var t = 0, n = e.normalizedDeps.length; n > t; t++){var a = e.normalizedDeps[t], u = p[a]; if (u && !u.evaluated){var d = e.groupIndex + (u.declarative != e.declarative); if (void 0 === u.groupIndex || u.groupIndex < d){if (void 0 !== u.groupIndex && (r[u.groupIndex].splice(v.call(r[u.groupIndex], u), 1), 0 == r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected"); u.groupIndex = d}o(u, r)}}}}function a(e){var r = p[e]; r.groupIndex = 0; var t = []; o(r, t); for (var n = !!r.declarative == t.length % 2, a = t.length - 1; a >= 0; a--){for (var u = t[a], i = 0; i < u.length; i++){var s = u[i]; n?d(s):l(s)}n = !n}}function u(e){return x[e] || (x[e] = {name:e, dependencies:[], exports:{}, importers:[]})}function d(r){if (!r.module){var t = r.module = u(r.name), n = r.module.exports, o = r.declare.call(e, function(e, r){if (t.locked = !0, "object" == typeof e)for (var o in e)n[o] = e[o]; else n[e] = r; for (var a = 0, u = t.importers.length; u > a; a++){var d = t.importers[a]; if (!d.locked)for (var i = 0; i < d.dependencies.length; ++i)d.dependencies[i] === t && d.setters[i](n)}return t.locked = !1, r}, r.name); t.setters = o.setters, t.execute = o.execute; for (var a = 0, i = r.normalizedDeps.length; i > a; a++){var l, s = r.normalizedDeps[a], c = p[s], v = x[s]; v?l = v.exports:c && !c.declarative?l = c.esModule:c?(d(c), v = c.module, l = v.exports):l = f(s), v && v.importers?(v.importers.push(t), t.dependencies.push(v)):t.dependencies.push(null), t.setters[a] && t.setters[a](l)}}}function i(e){var r, t = p[e]; if (t)t.declarative?c(e, []):t.evaluated || l(t), r = t.module.exports; else if (r = f(e), !r)throw new Error("Unable to load dependency " + e + "."); return(!t || t.declarative) && r && r.__useDefault?r["default"]:r}function l(r){if (!r.module){var t = {}, n = r.module = {exports:t, id:r.name}; if (!r.executingRequire)for (var o = 0, a = r.normalizedDeps.length; a > o; o++){var u = r.normalizedDeps[o], d = p[u]; d && l(d)}r.evaluated = !0; var c = r.execute.call(e, function(e){for (var t = 0, n = r.deps.length; n > t; t++)if (r.deps[t] == e)return i(r.normalizedDeps[t]); throw new TypeError("Module " + e + " not declared as a dependency.")}, t, n); c && (n.exports = c), t = n.exports, t && t.__esModule?r.esModule = t:r.esModule = s(t)}}function s(r){if (r === e)return r; var t = {}; if ("object" == typeof r || "function" == typeof r)if (g){var n; for (var o in r)(n = Object.getOwnPropertyDescriptor(r, o)) && h(t, o, n)} else{var a = r && r.hasOwnProperty; for (var o in r)(!a || r.hasOwnProperty(o)) && (t[o] = r[o])}return t["default"] = r, h(t, "__useDefault", {value:!0}), t}function c(r, t){var n = p[r]; if (n && !n.evaluated && n.declarative){t.push(r); for (var o = 0, a = n.normalizedDeps.length; a > o; o++){var u = n.normalizedDeps[o]; - 1 == v.call(t, u) && (p[u]?c(u, t):f(u))}n.evaluated || (n.evaluated = !0, n.module.execute.call(e))}}function f(e){if (D[e])return D[e]; if ("@node/" == e.substr(0, 6))return y(e.substr(6)); var r = p[e]; if (!r)throw"Module " + e + " not present."; return a(e), c(e, []), p[e] = void 0, r.declarative && h(r.module.exports, "__esModule", {value:!0}), D[e] = r.declarative?r.module.exports:r.esModule}var p = {}, v = Array.prototype.indexOf || function(e){for (var r = 0, t = this.length; t > r; r++)if (this[r] === e)return r; return - 1}, g = !0; try{Object.getOwnPropertyDescriptor({a:0}, "a")} catch (m){g = !1}var h; !function(){try{Object.defineProperty({}, "a", {}) && (h = Object.defineProperty)} catch (e){h = function(e, r, t){try{e[r] = t.value || t.get.call(e)} catch (n){}}}}(); var x = {}, y = "undefined" != typeof System && System._nodeRequire || "undefined" != typeof require && require.resolve && "undefined" != typeof process && require, D = {"@empty":{}}; return function(e, n, o){return function(a){a(function(a){for (var u = {_nodeRequire:y, register:r, registerDynamic:t, get:f, set:function(e, r){D[e] = r}, newModule:function(e){return e}}, d = 0; d < n.length; d++)(function(e, r){r && r.__esModule?D[e] = r:D[e] = s(r)})(n[d], arguments[d]); o(u); var i = f(e[0]); if (e.length > 1)for (var d = 1; d < e.length; d++)f(e[d]); return i.__useDefault?i["default"]:i})}}}("undefined" != typeof self?self:global)

(["1"], [], function($__System) {

  !function(){var t = $__System; if ("undefined" != typeof window && "undefined" != typeof document && window.location)var s = location.protocol + "//" + location.hostname + (location.port?":" + location.port:""); t.set("@@cjs-helpers", t.newModule({getPathVars:function(t){var n, o = t.lastIndexOf("!"); n = - 1 != o?t.substr(0, o):t; var e = n.split("/"); return e.pop(), e = e.join("/"), "file:///" == n.substr(0, 8)?(n = n.substr(7), e = e.substr(7), isWindows && (n = n.substr(1), e = e.substr(1))):s && n.substr(0, s.length) === s && (n = n.substr(s.length), e = e.substr(s.length)), {filename:n, dirname:e}}}))}();
  $__System.register("2", [], function (_export) {
    "use strict";
    return {
      setters: [],
      execute: function () {
        _export("default", window.angular);
      }
    };
  });
  $__System.registerDynamic("3", [], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    module.exports = {
      "stepway": {"version": "1.1.0"},
      "dragdropway": {"version": "1.1.0"},
      "formviewer": {"version": "1.1.0"}
    };
    global.define = __define;
    return module.exports;
  });
  $__System.register('4', ['3'], function (_export) {
    'use strict';
    var easyFormConfig, EASY_FORM_VERSION_NAME, EASY_FORM_VERSION_VALUE, ACTIVE_MODAL_ANIMATION;
    function easyFromConfig(easyFormSteWayConfigProvider) {
      //enable/disable easy form modal animation
      //HERE : disabling animation due to angular bootstrap backdrop bug with angular >= 1.4
      easyFormSteWayConfigProvider.setModalAnimation(ACTIVE_MODAL_ANIMATION);
    }

    return {
      setters: [function (_) {
        easyFormConfig = _['default'];
      }],
      execute: function () {
        EASY_FORM_VERSION_NAME = 'easyFormGenVersion';
        EASY_FORM_VERSION_VALUE = easyFormConfig.stepway.version;
        ACTIVE_MODAL_ANIMATION = false;
        easyFromConfig.$inject = ['easyFormSteWayConfigProvider'];
        _export('default', easyFromConfig);
        _export('EASY_FORM_VERSION_NAME', EASY_FORM_VERSION_NAME);
        _export('EASY_FORM_VERSION_VALUE', EASY_FORM_VERSION_VALUE);
      }
    };
  });
  $__System.register("5", [], function (_export) {
    "use strict";
    var richTextTemplate, blankTemplate, pageTemplate, subTitleTemplate, subSectionTemplate, labelTemplate, basicSelectTemplate, groupedSelectTemplate, datepickerTemplate, validationTemplate, emailTemplate, textinputTemplate, ipTemplate, numberTemplate, passwordTemplate, textAreaTemplate;
    return {
      setters: [],
      execute: function () {
        richTextTemplate = "<text-angular name=\"{{id}}\" class=\"richTextAngular\" ng-model=\"model[options.key || index]\" ng-model-options=\"{ updateOn: 'blur' }\"></text-angular>";
        blankTemplate = "<div></div>";
        pageTemplate = "<div class=\"pageBreakControl\"></div>";
        subTitleTemplate = "<div class=\"row sectionView\"><div><h4 class=\"text-center\">{{options.templateOptions.placeholder}}</h4></div></div>";
        subSectionTemplate = "<div class=\"row subSectionView\"><div><h5 class=\"text-center\">{{options.templateOptions.placeholder}}</h5></div></div>";
        labelTemplate = "<div class=\"labelStyle\"><div><h5 class=\"text-center\">{{options.templateOptions.placeholder}}</h5></div></div>";
        basicSelectTemplate = " <ol class=\"nya-bs-select form-control col-sm-12 col-xs-12 col-md-12 col-lg12\" ng-model=\"model[options.key || index]\" ng-model-options=\"{ updateOn: 'blur' }\" id=\"{{id}}\" disabled=\"options.templateOptions.options.length === 0\"><li ng-if=\"options.templateOptions.options.length === 0\"></li><li class=\"nya-bs-option\" nya-bs-option=\"option in options.templateOptions.options\"> <a>{{option.name}}</a> </li></ol>";
        groupedSelectTemplate = "<ol class=\"nya-bs-select form-control col-sm-12 col-xs-12 col-md-12 col-lg12\" ng-model=\"model[options.key || index]\" data-live-search=\"true\" disabled=\"options.templateOptions.options.length === 0\"><li nya-bs-option=\"option in  options.templateOptions.options group by option.group\"><span class=\"dropdown-header\">{{$group}}</span> <a><span>{{option.name}}</span><span class=\"glyphicon glyphicon-ok check-mark\"></span></a></li></ol>";
        datepickerTemplate = "<input  id=\"{{id}}\" class=\"form-control\" ng-click=\"open($event)\" ng-model=\"model[options.key  || index]\" is-open=\"to.isOpen\" ng-click=\"to.isOpen = true\" datepicker-options=\"to.datepickerOptions\" />";
        validationTemplate = "<div class=\"formly-template-wrapper form-group\" ng-class=\"{'has-error': options.validation.errorExistsAndShouldBeVisible}\"><formly-transclude></formly-transclude><div class=\"validation\" ng-if=\"options.validation.errorExistsAndShouldBeVisible\" ng-messages=\"options.formControl.$error\"><div ng-messages-include=\"validation.html\"></div><span ng-message=\"{{::name}}\" ng-repeat=\"(name, message) in ::options.validation.messages\">{{message(options.formControl.$viewValue, options.formControl.$modelValue, this)}}</span></div></div>";
        emailTemplate = "<input class=\"form-control\" ng-model=\"model[options.key]\" ng-model-options=\"{ updateOn: 'blur' }\" id=\"{{id}}\">";
        textinputTemplate = "<input class=\"form-control\" ng-model=\"model[options.key]\" ng-model-options=\"{ updateOn: 'blur' }\" id=\"{{id}}\">";
        ipTemplate = "<input class=\"form-control\" ng-model=\"model[options.key]\" ng-model-options=\"{ updateOn: 'blur' }\" id=\"{{id}}\">";
        numberTemplate = "<input class=\"form-control\" ng-model=\"model[options.key]\" ng-model-options=\"{ updateOn: 'blur' }\" id=\"{{id}}\">";
        passwordTemplate = "<input type=\"password\" class=\"form-control\" ng-model=\"model[options.key]\" ng-model-options=\"{ updateOn: 'blur' }\" id=\"{{id}}\">";
        textAreaTemplate = "<textarea class=\"form-control\" ng-model=\"model[options.key]\" ng-model-options=\"{ updateOn: 'blur' }\" id=\"{{id}}\">";
        _export("richTextTemplate", richTextTemplate);
        _export("blankTemplate", blankTemplate);
        _export("pageTemplate", pageTemplate);
        _export("subTitleTemplate", subTitleTemplate);
        _export("subSectionTemplate", subSectionTemplate);
        _export("labelTemplate", labelTemplate);
        _export("basicSelectTemplate", basicSelectTemplate);
        _export("groupedSelectTemplate", groupedSelectTemplate);
        _export("datepickerTemplate", datepickerTemplate);
        _export("validationTemplate", validationTemplate);
        _export("emailTemplate", emailTemplate);
        _export("textinputTemplate", textinputTemplate);
        _export("ipTemplate", ipTemplate);
        _export("numberTemplate", numberTemplate);
        _export("passwordTemplate", passwordTemplate);
        _export("textAreaTemplate", textAreaTemplate);
      }
    };
  });
  $__System.register('6', ['5'], function (_export) {
    /* global angular */
    'use strict';
    var richTextTemplate, blankTemplate, pageTemplate, subTitleTemplate, subSectionTemplate, labelTemplate, basicSelectTemplate, groupedSelectTemplate, datepickerTemplate, validationTemplate, emailTemplate, textinputTemplate, ipTemplate, numberTemplate, passwordTemplate, textAreaTemplate;
    function formlyConfig(formlyConfigProvider) {

      formlyConfigProvider.setType({
        name: 'richEditor',
        template: richTextTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
      });
      formlyConfigProvider.setType({
        name: 'blank',
        template: blankTemplate
      });
      formlyConfigProvider.setType({
        name: 'page',
        template: pageTemplate
      });
      formlyConfigProvider.setType({
        name: 'subTitle',
        template: subTitleTemplate
      });
      formlyConfigProvider.setType({
        name: 'subSection',
        template: subSectionTemplate
      });
      formlyConfigProvider.setType({
        name: 'label',
        template: labelTemplate
      });
      formlyConfigProvider.setType({
        name: 'basicSelect',
        template: basicSelectTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
      });
      formlyConfigProvider.setType({
        name: 'groupedSelect',
        template: groupedSelectTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
      });
      formlyConfigProvider.setType({
        name: 'textinput',
        template: textinputTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
      });
      formlyConfigProvider.setType({
        name: 'email',
        template: emailTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
      });
      formlyConfigProvider.setType({
        name: 'ipAddress',
        template: ipTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
      });
      formlyConfigProvider.setType({
        name: 'number',
        template: numberTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
      });
      formlyConfigProvider.setType({
        name: 'passwordField',
        template: passwordTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
      });
      formlyConfigProvider.setType({
        name: 'textAreaField',
        template: textAreaTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
      });
      ////////////////////////////
      // angular UI date picker
      ////////////////////////////
      // thx Kent C. Dodds

      var attributes = ['date-disabled', 'custom-class', 'show-weeks', 'starting-day', 'init-date', 'min-mode', 'max-mode', 'format-day', 'format-month', 'format-year', 'format-day-header', 'format-day-title', 'format-month-title', 'year-range', 'shortcut-propagation', 'datepicker-popup', 'show-button-bar', 'current-text', 'clear-text', 'close-text', 'close-on-date-selection', 'datepicker-append-to-body'];
      var bindings = ['datepicker-mode', 'min-date', 'max-date'];
      var ngModelAttrs = {};
      angular.forEach(attributes, function (attr) {
        ngModelAttrs[camelize(attr)] = { attribute: attr };
      });
      angular.forEach(bindings, function (binding) {
        ngModelAttrs[camelize(binding)] = { bound: binding };
      });
      formlyConfigProvider.setType({
        name: 'datepicker',
        template: datepickerTemplate,
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: ['$scope', function ($scope) {
          $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
          };
        }],
        defaultOptions: {
          ngModelAttrs: ngModelAttrs,
          templateOptions: {
            addonLeft: {
              'class': 'glyphicon glyphicon-calendar',
              onClick: function onClick(options) {
                return options.templateOptions.isOpen = !options.templateOptions.isOpen;
              }
            },
            onFocus: function onFocus($viewValue, $modelValue, scope) {
              return scope.to.isOpen = !scope.to.isOpen;
            },
            datepickerOptions: {}
          }
        }

      });
      /**
       * wrappers to show validation errors
       * without having to rewrite formly types
       */
      formlyConfigProvider.setWrapper([{
        template: validationTemplate
      }]);
      function camelize(string) {
        string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
          return chr ? chr.toUpperCase() : '';
        });
        // Ensure 1st char is always lowercase
        return string.replace(/^([A-Z])/, function (match, chr) {
          return chr ? chr.toLowerCase() : '';
        });
      }
    }

    return {
      setters: [function (_) {
        richTextTemplate = _.richTextTemplate;
        blankTemplate = _.blankTemplate;
        pageTemplate = _.pageTemplate;
        subTitleTemplate = _.subTitleTemplate;
        subSectionTemplate = _.subSectionTemplate;
        labelTemplate = _.labelTemplate;
        basicSelectTemplate = _.basicSelectTemplate;
        groupedSelectTemplate = _.groupedSelectTemplate;
        datepickerTemplate = _.datepickerTemplate;
        validationTemplate = _.validationTemplate;
        emailTemplate = _.emailTemplate;
        textinputTemplate = _.textinputTemplate;
        ipTemplate = _.ipTemplate;
        numberTemplate = _.numberTemplate;
        passwordTemplate = _.passwordTemplate;
        textAreaTemplate = _.textAreaTemplate;
      }],
      execute: function () {
        formlyConfig.$inject = ['formlyConfigProvider'];
        _export('default', formlyConfig);
      }
    };
  });
  $__System.registerDynamic("7", [], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    module.exports = {
      "SAY_HI": "Hello",
      "EDIT_TAB": "EDIT / CREATE",
      "PREVIEW_TAB": "PREVIEW",
      "WIZARD_LINES": "Form Elements",
      "WIZARD_LAYOUT": "Layout",
      "WIZARD_CONTROLS": "Form Setup",
      "WIZARD_SAVE": "Save",
      "PAGER_PREVIOUS": "Previous",
      "PAGER_NEXT": "Next",
      "COMMAND_PANEL": "Command",
      "VISUAL_PANEL": "Visual",
      "ADD_NEW_LINE": "Add New Line",
      "SELECTED_LINE": "Selected line",
      "NUMBER_OF_COLUMN": "number of columns",
      "APPLY_CTRL2COL": "Apply controls to columns",
      "CLIC_TAP_2_OPEN": "Click / Tap on column to open control selection",
      "SELECT_2_APPLY_COL": "Select desired control and valid to apply it to column",
      "CUSTOM_SUBMIT_BTN": "Customize Submit button Text",
      "CUSTOM_CANCEL_BTN": "Customize Cancel button Text",
      "NAME_THIS_FORM": "Name this form",
      "SAVE_THIS_FORM": "Save",
      "FINAL_STEP": "Final Step : form preview",
      "DATA_MODEL": "DATA MODEL",
      "FIELDS_MODEL": "FIELDS MODEL (ready to save to database one)",
      "SELECT_A_CTRL": "Select a control",
      "SELECT_CTRL_IN_LIST": "Select a control in the list below",
      "COL_WILL_BE_BLANK": "Column will be blank",
      "EDIT_PROPERTIES": "Edit properties",
      "HEADER_TEXT": "Header text",
      "ADD_EDIT_HEADER_HERE": "Add / edit header text here",
      "SUBTITLE_TEXT": "Section text",
      "ADD_EDIT_SUBTIL_HERE": "Add / edit section text here",
      "LABEL_TEXT": "Question text",
      "ADD_EDIT_LABEL_HERE": "Add / edit control label here",
      "PLACEHOLDER": "Placeholder",
      "ADD_EDIT_PLACEHOLD": "Add / edit placeholder text here",
      "REQUIRED": "Required",
      "DESCRIPTION": "Description",
      "ADDEDIT_DESCRIPTION": "Add / edit description here",
      "DATE_FORMAT": "Date format",
      "ADD_NEW_RADIO": "Add new radio",
      "ADD_RADIO_PLACEHOLD": "add new radio",
      "EDIT_REMOVE_RADIO": "Edit/Remove radio",
      "NO_RADIO_ADD_NEW": "no radio : add new radio values",
      "SEARCH_4_OPTION": "search for option",
      "ADD": "add",
      "ORDER": "order",
      "OPTION": "option",
      "GROUP": "group",
      "ADD_NEW_OPTIONS": "Add new options",
      "ADD_A_NEW_OPTION": "add new option",
      "EDIT_REMOVE_OPTIONS": "Edit/Remove options",
      "NO_OPTION_ADD_NEW": "no option : add new options",
      "ADD_NEW_GROUPS": "Add new groups",
      "ADD_A_NEW_GROUP": "Add new group",
      "EDIT_GROUPS_OPTIONS": "Edit/Remove options/groups",
      "NO_GROUP_ADD_NEW": "add new groups",
      "OK": "OK",
      "CANCEL": "Cancel"
    };
    global.define = __define;
    return module.exports;
  });
  $__System.registerDynamic("8", [], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    module.exports = {
      "SAY_HI": "Bonjour",
      "EDIT_TAB": "Edition / Creation",
      "PREVIEW_TAB": "Aperçu",
      "WIZARD_LINES": "lignes",
      "WIZARD_LAYOUT": "disposition",
      "WIZARD_CONTROLS": "contrôles",
      "WIZARD_SAVE": "sauvegarder",
      "PAGER_PREVIOUS": "Précédent",
      "PAGER_NEXT": "Suivant",
      "COMMAND_PANEL": "Commandes",
      "VISUAL_PANEL": "Visuel",
      "ADD_NEW_LINE": "Ajouter une nouvelle ligne",
      "SELECTED_LINE": "Ligne sélectionnée",
      "NUMBER_OF_COLUMN": "nombre de colonnes",
      "APPLY_CTRL2COL": "Appliquer les contrôles aux colonnes",
      "CLIC_TAP_2_OPEN": "Cliquer sur une colonne pour ouvrir le menu d'édition",
      "SELECT_2_APPLY_COL": "Sélectionner un contrôle puis valider pour l'appliquer à la colonne",
      "CUSTOM_SUBMIT_BTN": "Personnaliser le texte du bouton envoie",
      "CUSTOM_CANCEL_BTN": "Personnaliser le texte du bouton annuler",
      "NAME_THIS_FORM": "Nommer le formulaire",
      "SAVE_THIS_FORM": "sauvegarder le formulaire",
      "FINAL_STEP": "Dernière étape : aperçu du formulaire",
      "DATA_MODEL": "MODELE DE DONNEES",
      "FIELDS_MODEL": "MODELE DES CHAMPS (modèle compatible base de données)",
      "SELECT_A_CTRL": "Sélectionner un contrôle",
      "SELECT_CTRL_IN_LIST": "Sélectionner un contrôle dans la liste ci-dessous",
      "COL_WILL_BE_BLANK": "La colonne sera vide",
      "EDIT_PROPERTIES": "Editer les propriétés",
      "HEADER_TEXT": "Texte du titre principal",
      "ADD_EDIT_HEADER_HERE": "Editer le textes du titre principal",
      "SUBTITLE_TEXT": "Texte du sous-titre",
      "ADD_EDIT_SUBTIL_HERE": "Editer le textes du sous-titre",
      "LABEL_TEXT": "Texte de l'étiquette",
      "ADD_EDIT_LABEL_HERE": "Editer le texte de l'étiquette",
      "PLACEHOLDER": "placeholder",
      "ADD_EDIT_PLACEHOLD": "Editer le placeholder",
      "REQUIRED": "Requis",
      "DESCRIPTION": "Description",
      "ADDEDIT_DESCRIPTION": "Ajouter / editer la description",
      "DATE_FORMAT": "Format de la date",
      "ADD_NEW_RADIO": "Ajouter un nouveau choix à cocher",
      "ADD_RADIO_PLACEHOLD": "Ajouter un nouveau choix à cocher",
      "EDIT_REMOVE_RADIO": "Editer / supprimer un choix à cocher",
      "NO_RADIO_ADD_NEW": "aucun choix à cocher : en ajouter un",
      "SEARCH_4_OPTION": "rechercher une option",
      "ADD": "ajouter",
      "ORDER": "ordre",
      "OPTION": "option",
      "GROUP": "groupe",
      "ADD_NEW_OPTIONS": "Ajouter de nouvelles options",
      "ADD_A_NEW_OPTION": "ajoutre une option",
      "EDIT_REMOVE_OPTIONS": "Editer / supprimer des options",
      "NO_OPTION_ADD_NEW": "aucune option : en ajouter",
      "ADD_NEW_GROUPS": "Ajouter de nouveaux groupes",
      "ADD_A_NEW_GROUP": "Ajouter un nouveau groupe",
      "EDIT_GROUPS_OPTIONS": "Editer / supprimer les groupes et options",
      "NO_GROUP_ADD_NEW": "ajouter de nouveaux groupes",
      "OK": "Valider",
      "CANCEL": "Annuler"
    };
    global.define = __define;
    return module.exports;
  });
  $__System.registerDynamic("9", [], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    module.exports = {
      "SAY_HI": "Hola",
      "EDIT_TAB": "Editar / Crear",
      "PREVIEW_TAB": "Previsualizar",
      "WIZARD_LINES": "lineas",
      "WIZARD_LAYOUT": "diseño",
      "WIZARD_CONTROLS": "controles",
      "WIZARD_SAVE": "guardar",
      "PAGER_PREVIOUS": "Anterior",
      "PAGER_NEXT": "Siguiente",
      "COMMAND_PANEL": "Comando",
      "VISUAL_PANEL": "Visual",
      "ADD_NEW_LINE": "Agregar nueva linea",
      "SELECTED_LINE": "Linea seleccionada",
      "NUMBER_OF_COLUMN": "numero de columnas",
      "APPLY_CTRL2COL": "Aplicar controles a columnas",
      "CLIC_TAP_2_OPEN": "Click / Toque en la columna para seleccionar controles",
      "SELECT_2_APPLY_COL": "Selecciona el control deseado para aplicarlo a la columna",
      "CUSTOM_SUBMIT_BTN": "Personalizar texto de boton Enviar",
      "CUSTOM_CANCEL_BTN": "Personalizar texto de boton Cancelar",
      "NAME_THIS_FORM": "Nombrar formulario",
      "SAVE_THIS_FORM": "guardar formulario",
      "FINAL_STEP": "Ultimo paso : previsualizar formulario",
      "DATA_MODEL": "MODELO DE DATOS",
      "FIELDS_MODEL": "MODELO DE CAMPOS (listo para guardar en base de datos uno)",
      "SELECT_A_CTRL": "Selecciona un control",
      "SELECT_CTRL_IN_LIST": "Selecciona un control de la lista",
      "COL_WILL_BE_BLANK": "Columna sera vacia",
      "EDIT_PROPERTIES": "Editar propiedades",
      "HEADER_TEXT": "Texto de encabezado",
      "ADD_EDIT_HEADER_HERE": "Agregar / editar texto de encabezado aqui",
      "SUBTITLE_TEXT": "Texto de subtitulo",
      "ADD_EDIT_SUBTIL_HERE": "Agregar / editar texto de subtitulo aqui",
      "LABEL_TEXT": "Texto de etiqueta",
      "ADD_EDIT_LABEL_HERE": "Agregar / editar texto de etiqueta aqui",
      "PLACEHOLDER": "Marcador",
      "ADD_EDIT_PLACEHOLD": "Agregar / editar texto de marcador aqui",
      "REQUIRED": "Requerido",
      "DESCRIPTION": "Descripcion",
      "ADDEDIT_DESCRIPTION": "Agregar / editar descripcion aqui",
      "DATE_FORMAT": "Formato de fecha",
      "ADD_NEW_RADIO": "Agregar nuevo radio",
      "ADD_RADIO_PLACEHOLD": "agregar nuevo radio",
      "EDIT_REMOVE_RADIO": "Editar/Eliminar radio",
      "NO_RADIO_ADD_NEW": "sin radio : agregar nuevos valores de radio",
      "SEARCH_4_OPTION": "buscar opcion",
      "ADD": "agregar",
      "ORDER": "orden",
      "OPTION": "opcion",
      "GROUP": "grupo",
      "ADD_NEW_OPTIONS": "agregar nuevas opciones",
      "ADD_A_NEW_OPTION": "agregar nueva opcione",
      "EDIT_REMOVE_OPTIONS": "Editar/Eliminar opciones",
      "NO_OPTION_ADD_NEW": "sin opcion : agregar nuevas opciones",
      "ADD_NEW_GROUPS": "Agregar nuevos grupos",
      "ADD_A_NEW_GROUP": "Agregar nuevo grupo",
      "EDIT_GROUPS_OPTIONS": "Editar/Eliminar opciones/grupos",
      "NO_GROUP_ADD_NEW": "agregar nuevos grupos",
      "OK": "OK",
      "CANCEL": "Cancelar"
    };
    global.define = __define;
    return module.exports;
  });
  $__System.registerDynamic("a", [], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    module.exports = {
      "SAY_HI": "Hallo",
      "EDIT_TAB": "Bearbeiten / Schaffen",
      "PREVIEW_TAB": "Vorschau",
      "WIZARD_LINES": "Linien",
      "WIZARD_LAYOUT": "Layout",
      "WIZARD_CONTROLS": "Steuerung",
      "WIZARD_SAVE": "sparen",
      "PAGER_PREVIOUS": "vorher.",
      "PAGER_NEXT": "nächste",
      "COMMAND_PANEL": "Anweisung",
      "VISUAL_PANEL": "visuell",
      "ADD_NEW_LINE": "Hinzufügen neuer Leitung",
      "SELECTED_LINE": "ausgewählte Linie",
      "NUMBER_OF_COLUMN": "Anzahl von Spalten",
      "APPLY_CTRL2COL": "gelten diese Steuer Spalte",
      "CLIC_TAP_2_OPEN": "klicken Sie auf Spalte zur Steuerungsauswahl öffnen",
      "SELECT_2_APPLY_COL": "Wählen Sie die gewünschte Steuerung und gültig , um es in Spalte anwenden",
      "CUSTOM_SUBMIT_BTN": "Passen Submit-Button Text",
      "CUSTOM_CANCEL_BTN": "Passen Cancel-Button Text",
      "NAME_THIS_FORM": "Nennen dieses Formular",
      "SAVE_THIS_FORM": "Speichern dieses Formular",
      "FINAL_STEP": "Endschritt : Formular Vorschau",
      "DATA_MODEL": "DATEN MODELL",
      "FIELDS_MODEL": "FELDER MODELL (Datenbank-kompatibel)",
      "SELECT_A_CTRL": "Wählen Sie ein Steuer",
      "SELECT_CTRL_IN_LIST": "Wählen Sie ein Steuer aus der Liste unten",
      "COL_WILL_BE_BLANK": "die Spalte werde leer sein",
      "EDIT_PROPERTIES": "Anzeigen",
      "HEADER_TEXT": "Kopftext",
      "ADD_EDIT_HEADER_HERE": "Kopftext ändern",
      "SUBTITLE_TEXT": "Untertitel",
      "ADD_EDIT_SUBTIL_HERE": "Untertitel ändern",
      "LABEL_TEXT": "Etikett",
      "ADD_EDIT_LABEL_HERE": "Etikett ändern",
      "PLACEHOLDER": "placeholder",
      "ADD_EDIT_PLACEHOLD": "placeholder ändern",
      "REQUIRED": "erforderlich",
      "DESCRIPTION": "Beschreibung",
      "ADDEDIT_DESCRIPTION": "Beschreibung ändern",
      "DATE_FORMAT": "Datumsformat",
      "ADD_NEW_RADIO": "Radiobutton hinzufügen",
      "ADD_RADIO_PLACEHOLD": "Radiobutton hinzufügen",
      "EDIT_REMOVE_RADIO": "Radiobutton ändern",
      "NO_RADIO_ADD_NEW": "kein Radiobutton : Radiobutton hinzufügen",
      "SEARCH_4_OPTION": "option suchen",
      "ADD": "hinzufügen",
      "ORDER": "bestellen",
      "OPTION": "Option",
      "GROUP": "Gruppe",
      "ADD_NEW_OPTIONS": "Optionen hinzufügen",
      "ADD_A_NEW_OPTION": "Option hinzufügen",
      "EDIT_REMOVE_OPTIONS": "Optionen ändern",
      "NO_OPTION_ADD_NEW": "kein option : Option hinzufügen",
      "ADD_NEW_GROUPS": "Gruppen hinzufügen",
      "ADD_A_NEW_GROUP": "Gruppe hinzufügen",
      "EDIT_GROUPS_OPTIONS": "Gruppen ändern",
      "NO_GROUP_ADD_NEW": "keine Gruppe : Gruppe hinzufügen",
      "OK": "bestätigen",
      "CANCEL": "stornieren"
    };
    global.define = __define;
    return module.exports;
  });
  $__System.registerDynamic("b", [], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    module.exports = {
      "SAY_HI": "Merhaba",
      "EDIT_TAB": "Düzenle / Oluştur",
      "PREVIEW_TAB": "Önizleme",
      "WIZARD_LINES": "satırlar",
      "WIZARD_LAYOUT": "düzen",
      "WIZARD_CONTROLS": "kontroller",
      "WIZARD_SAVE": "kaydet",
      "PAGER_PREVIOUS": "Geri",
      "PAGER_NEXT": "İleri",
      "COMMAND_PANEL": "Komut",
      "VISUAL_PANEL": "Görsel",
      "ADD_NEW_LINE": "Yeni satır ekle",
      "SELECTED_LINE": "Seçili satır",
      "NUMBER_OF_COLUMN": "sütun sayısı",
      "APPLY_CTRL2COL": "Sütunlara form ögesi ekle",
      "CLIC_TAP_2_OPEN": "Form ögesi eklemek için sütunlara tıkla",
      "SELECT_2_APPLY_COL": "İstediğin ögeyi seçtikten sonra gerekli yerleri doldur ve kaydet",
      "CUSTOM_SUBMIT_BTN": "Gönder butonu yazısını düzenle",
      "CUSTOM_CANCEL_BTN": "İptal butonu yazısını düzenle",
      "NAME_THIS_FORM": "Forma isim ver",
      "SAVE_THIS_FORM": "formu kaydet",
      "FINAL_STEP": "Son aşama : form önizlemesi",
      "DATA_MODEL": "VERİ MODELİ",
      "FIELDS_MODEL": "ALAN MODELİ (veritabanına kaydetmeye hazır)",
      "SELECT_A_CTRL": "Form ögesi seç",
      "SELECT_CTRL_IN_LIST": "Verilen listeden bir form ögesi seç",
      "COL_WILL_BE_BLANK": "Sütun boş kalacak",
      "EDIT_PROPERTIES": "Özellikleri düzenle",
      "HEADER_TEXT": "Başlık yazısı",
      "ADD_EDIT_HEADER_HERE": "Başlık yazısını ekle / düzenle",
      "SUBTITLE_TEXT": "Altyazı",
      "ADD_EDIT_SUBTIL_HERE": "Altyazı ekle / düzenle",
      "LABEL_TEXT": "Form ögesinin adı",
      "ADD_EDIT_LABEL_HERE": "Ad ekle / düzenle",
      "PLACEHOLDER": "Form ögesinin içine geçici yazı ekle",
      "ADD_EDIT_PLACEHOLD": "Geçici yazı ekle / düzenle",
      "REQUIRED": "Gerekli",
      "DESCRIPTION": "Açıklama",
      "ADDEDIT_DESCRIPTION": "Açıklama ekle / düzenle",
      "DATE_FORMAT": "Tarih formatı",
      "ADD_NEW_RADIO": "Radio butonu ekle",
      "ADD_RADIO_PLACEHOLD": "radio butonu ekle",
      "EDIT_REMOVE_RADIO": "Radio butonunu ekle / düzenle",
      "NO_RADIO_ADD_NEW": "radio butonu yok : yeni buton ekle",
      "SEARCH_4_OPTION": "seçenek ara",
      "ADD": "ekle",
      "ORDER": "sıra",
      "OPTION": "seçenek",
      "GROUP": "grup",
      "ADD_NEW_OPTIONS": "Yeni seçenek ekle",
      "ADD_A_NEW_OPTION": "yeni seçenek ekle",
      "EDIT_REMOVE_OPTIONS": "Seçenekleri düzenle/sil",
      "NO_OPTION_ADD_NEW": "seçenek yok : yeni seçenek ekle",
      "ADD_NEW_GROUPS": "Yeni grup ekle",
      "ADD_A_NEW_GROUP": "Yeni grup ekle",
      "EDIT_GROUPS_OPTIONS": "Seçenek/Grup Ekle/sil",
      "NO_GROUP_ADD_NEW": "yeni grup ekle",
      "OK": "TAMAM",
      "CANCEL": "İptal"
    };
    global.define = __define;
    return module.exports;
  });
  $__System.registerDynamic("c", [], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    module.exports = {
      "SAY_HI": "こんにちわ",
      "EDIT_TAB": "編集 / 作成",
      "PREVIEW_TAB": "プレビュー",
      "WIZARD_LINES": "ライン",
      "WIZARD_LAYOUT": "レイアウト",
      "WIZARD_CONTROLS": "コントロール",
      "WIZARD_SAVE": "サーブ",
      "PAGER_PREVIOUS": "前",
      "PAGER_NEXT": "次",
      "COMMAND_PANEL": "コマンド",
      "VISUAL_PANEL": "ビジュアル",
      "ADD_NEW_LINE": "新しいライン追加",
      "SELECTED_LINE": "選択されたライン",
      "NUMBER_OF_COLUMN": "カラムの数",
      "APPLY_CTRL2COL": "カラムにコントロール適用",
      "CLIC_TAP_2_OPEN": "コントロール選択を広げるには列をクリック",
      "SELECT_2_APPLY_COL": "好きなコントロールを選び適用",
      "CUSTOM_SUBMIT_BTN": "適用ボタンの文字変更する場合",
      "CUSTOM_CANCEL_BTN": "キャンセルボタンの文字変更する場合",
      "NAME_THIS_FORM": "形式に名前を付ける",
      "SAVE_THIS_FORM": "形式をサーブ",
      "FINAL_STEP": "ファイナルステップ : プレビュー形式",
      "DATA_MODEL": "データーモデル",
      "FIELDS_MODEL": "モデルフィールド",
      "SELECT_A_CTRL": "コントロールを選び選択",
      "SELECT_CTRL_IN_LIST": "以下のリストからコントロールを選び選択",
      "COL_WILL_BE_BLANK": "空になる列",
      "EDIT_PROPERTIES": "プロパティの変更",
      "HEADER_TEXT": "ヘッダーテキスト",
      "ADD_EDIT_HEADER_HERE": "ヘッダーテキスト文字変更",
      "SUBTITLE_TEXT": "サブタイトル　テキスト",
      "ADD_EDIT_SUBTIL_HERE": "サブタイトルテキスト文字変更",
      "LABEL_TEXT": "ラベルテキスト",
      "ADD_EDIT_LABEL_HERE": "ラベルテキスト文字変更",
      "PLACEHOLDER": "プレースホルダー",
      "ADD_EDIT_PLACEHOLD": "プレースホルダー文字変更",
      "REQUIRED": "必須",
      "DESCRIPTION": "説明",
      "ADDEDIT_DESCRIPTION": "説明の変更",
      "DATE_FORMAT": "日付の形式",
      "ADD_NEW_RADIO": "新ラジオボタンを追加",
      "ADD_RADIO_PLACEHOLD": "新ラジオボタンを追加",
      "EDIT_REMOVE_RADIO": "ラジオボタン変更",
      "NO_RADIO_ADD_NEW": "ラジオ無し : 新ラジオボタン追加",
      "SEARCH_4_OPTION": "オプション検索",
      "ADD": "追加",
      "ORDER": "順番",
      "OPTION": "オプション",
      "GROUP": "グループ",
      "ADD_NEW_OPTIONS": "新しいオプション追加",
      "ADD_A_NEW_OPTION": "新しいオプション追加",
      "EDIT_REMOVE_OPTIONS": "オプションの変更",
      "NO_OPTION_ADD_NEW": "オプション無し : 新しいオプション追加",
      "ADD_NEW_GROUPS": "新しいグループ追加",
      "ADD_A_NEW_GROUP": "新しいグループ追加",
      "EDIT_GROUPS_OPTIONS": "グループを変更",
      "NO_GROUP_ADD_NEW": "グループを追加",
      "OK": "オッケー",
      "CANCEL": "キャンセル"
    };
    global.define = __define;
    return module.exports;
  });
  $__System.register('d', ['7', '8', '9', 'a', 'b', 'c'], function (_export) {
    'use strict';
    var localEn, localFr, localEs, localDe, localTr, localJp, TRANSLATE_CONFIG;
    function translateConfig($translateProvider) {
      $translateProvider.translations('en', localEn);
      $translateProvider.translations('fr', localFr);
      $translateProvider.translations('es', localEs);
      $translateProvider.translations('de', localDe);
      $translateProvider.translations('tr', localTr);
      $translateProvider.translations('jp', localJp);
    }

    return {
      setters: [function (_) {
        localEn = _['default'];
      }, function (_2) {
        localFr = _2['default'];
      }, function (_3) {
        localEs = _3['default'];
      }, function (_a) {
        localDe = _a['default'];
      }, function (_b) {
        localTr = _b['default'];
      }, function (_c) {
        localJp = _c['default'];
      }],
      execute: function () {
        TRANSLATE_CONFIG = 'easyFormTranslateConfig';
        translateConfig.$inject = ['$translateProvider'];
        _export('default', translateConfig);
        _export('TRANSLATE_CONFIG', TRANSLATE_CONFIG);
      }
    };
  });
  $__System.register('e', ['d'], function (_export) {
    /* global angular */
    'use strict';
    var translateConfig, TRANSLATE_CONFIG, TRANSLATE_MODULE;
    return {
      setters: [function (_d) {
        translateConfig = _d['default'];
        TRANSLATE_CONFIG = _d.TRANSLATE_CONFIG;
      }],
      execute: function () {
        TRANSLATE_MODULE = 'eda.easyFormGenerator.translate';
        _export('default', angular.module(TRANSLATE_MODULE, []).config(translateConfig));
      }
    };
  });
  $__System.register('f', [], function (_export) {
    /* global angular */
    'use strict';
    var CORE_MODULES;
    return {
      setters: [],
      execute: function () {
        CORE_MODULES = ['textAngular', 'textAngularSetup', 'ngAnimate', 'toaster', 'formly', 'formlyBootstrap', 'ui.bootstrap', 'nya.bootstrap.select', 'pascalprecht.translate'];
        _export('default', angular.module('edaStepWayEasyFormGen.core', CORE_MODULES));
      }
    };
  });
  $__System.registerDynamic("10", [], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    module.exports = "<ol class=\"breadcrumb\" style=\"margin-bottom: 5px;\"><li><a href ng-click=\"vm.breadcrumb()\">Form List</a></li><li class=\"active\">Manage Form</li></ol><section id=\"pageWfEdit\"> <div ng-init=\"\"> <div class=\"container\"> <section id=\"preview\"> <div id=\"preview-content\"> <div class=\"content-container\"> <!-- taoster alert --> <toaster-container toaster-options=\"{'position-class': 'toast-bottom-full-width', 'extendedTimeout':500,'timeOut':500, }\"></toaster-container> <tabset justified=\"true\"> <tab active=\"vm.tab.editTab.active\" heading=\"{{'EDIT_TAB' | translate}}\"> <div class=\"row\"> <!-- STEP INDICATOR --> <div class=\"row stepwizardTopmargin\"> <div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2\"> <div class=\"stepwizard\"> <div class=\"row stepwizard-row\"> <div class=\"stepwizard-step col-md-6\"> <button type=\"button\" style=\"cursor:default\" class=\"btn btn-default btn-circle\" ng-class=\"{'btn-primary': vm.configuration.stepIndicators[0], 'btn-default': !vm.configuration.stepIndicators[0]}\" >0</button> <p>{{'WIZARD_CONTROLS' | translate}}</p> </div> <div class=\"stepwizard-step col-md-6\"> <button type=\"button\" style=\"cursor:default\" class=\"btn btn-default btn-circle\" ng-class=\"{'btn-primary': vm.configuration.stepIndicators[1], 'btn-default': !vm.configuration.stepIndicators[1], 'disabled': (vm.configuration.configStepCounter < 1)}\" >1</button> <p>{{'WIZARD_SAVE' | translate}}</p> </div> </div> </div> </div> </div> </div> <div class=\"row\"> <ul class=\"pager\"> <li ng-class=\"{'disabled':vm.stepIndicators[0]}\"><button class=\"btn btn-sm btn-primary customPagerButton\" ng-click=\"vm.previousConfigStep()\" ><i class=\"fa fa-arrow-left fa-2x pull-left\"></i><span class=\"pull-right\">{{'PAGER_PREVIOUS' | translate}}</span></button></li> <li ng-class=\"{'disabled':vm.stepIndicators[2]}\"><button class=\"btn btn-sm btn-primary customPagerButton\" ng-click=\"vm.nextConfigStep()\"><span class=\"pull-left\">{{'PAGER_NEXT' | translate}}</span><i class=\"fa fa-arrow-right fa-2x pull-right\"></i></button></li> </ul> <div> <div class=\"col-md-2\" ng-switch on=\"vm.configuration.listConfigStep[vm.configuration.configStepCounter]\"> <div ng-switch-when=\"init\"> <div id=\"commandPanel\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\"> <h3 class=\"panel-title\" style=\"font-size:15px\"><i class=\"fa fa-keyboard-o\"></i>&nbsp;{{'COMMAND_PANEL' | translate}}</h3> </div> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-xs-12 col-md-12\"> <form novalidate> <span class=\"addNewLine\">{{'ADD_NEW_LINE' | translate}}</span><br> <div><button class=\"btn btn-sm btn-primary btnMinusColumns btnSize\" ng-click=\"vm.addNewline()\"><i class=\"fa fa-plus fa-1x\"></i></button> </div> </form> </div> </div> <div class=\"row\" style=\"margin-top: 10px;\"> <div class=\"col-xs-12 col-md-12\"> <form novalidate> <span class=\"addNewLine\"> Adjust Columns</span> <div> <div class=\"col-xs-2 col-sm-2 col-md-2\" style=\"padding-left: 0px;\"><button class=\"btn btn-sm btn-primary btnMinusColumns btnSize\" ng-click=\"vm.decreaseNumberOfColumns()\"><i class=\"fa fa-minus fa-1x\"></i></button></div> <div class=\"col-xs-2 col-sm-2 col-md-2 text-center\" id=\"colNumberText\"><span class=\"numberOfColumnsLabel \">{{vm.configuration.lines[vm.configuration.activeLine -1].columns.length}}</span></div> <div class=\"col-xs-2 col-sm-2 col-md-2\"><button class=\"btn btn-sm btn-primary btnAddColumns btnSize\" ng-click=\"vm.increaseNumberOfColumns()\"><i class=\"fa fa-plus fa-1x\"></i></button></div> </div> </form> </div> </div> <hr/> <div class=\"row\"> <div class=\"col-xs-12 col-md-12\"> <form name=\"matrix\" novalidate> <span class=\"addNewLine\">Add New Matrix</span><br> <div class=\"addNewMatrix\"><label>Rows:<input id=\"numRow\" type=\"number\" name=\"row\" ng-model=\"vm.numberOfRow\" step=\"1\" min=\"1\" max=\"50\" ng-pattern=\"rowReg\" placeholder=\"1 to 50\" required></label> <label>Columns:<input id=\"numColumn\" type=\"number\" name=\"column\" ng-model=\"vm.numberOfColumn\" step=\"1\" min=\"1\" max=\"6\" ng-pattern=\"columnReg\" placeholder=\"1 to 6\" required></label></div> <button class=\"btn btn-sm btn-primary btnSize\" ng-click=\"vm.addNewMatrix()\" ng-disabled=\"((matrix.row.$dirty && matrix.row.$invalid) || (matrix.column.$dirty && matrix.column.$invalid) || matrix.row.$pristine || matrix.column.$pristine )\"><i class=\"fa fa-plus fa-1x\"></i></button> </form> </div> </div> </div> </div> </div> </div> <div ng-switch-when=\"first\"> <div id=\"commandPanel\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\"> <h3 class=\"panel-title\"><i class=\"fa fa-keyboard-o\"></i>&nbsp;{{'COMMAND_PANEL' | translate}}</h3> </div> <div class=\"panel-body\"> <!-- <div class=\"row\"> <div class=\"col-xs-12\"> <div class=\"form-group\"> <label for=\"inputSubmitButtontext\" class=\" greyText control-label\">{{'CUSTOM_SUBMIT_BTN' | translate}} :</label> <div class=\"\"><input type=\"text\" class=\"form-control\" id=\"inputSubmitButtontext\" placeholder=\"\" ng-model=\"vm.configuration.submitButtonText\"></div> </div> </div> </div> <hr/> <div class=\"row\"> <div class=\"col-xs-12\"> <div class=\"form-group\"> <label for=\"inputCancelButtontext\" class=\" greyText control-label\">{{'CUSTOM_CANCEL_BTN' | translate}} :</label> <div class=\"\"><input type=\"text\" class=\"form-control\" id=\"inputCancelButtontext\" placeholder=\"\" ng-model=\"vm.configuration.cancelButtonText\"></div> </div> </div> </div> <hr/> --> <div class=\"row\"> <div class=\"col-xs-12\"> <div class=\"form-group\"> <label for=\"inputNameFormtext\" class=\" greyText control-label\">{{'NAME_THIS_FORM' | translate}} :</label> <div class=\"\"><input type=\"text\" class=\"form-control\" id=\"inputNameFormtext\" placeholder=\"\" ng-model=\"vm.configuration.formName\"></div> </div> </div> </div> <button class=\"btn-red-sm\" ng-click=\"vm.saveThisForm('save',$event)\">{{'SAVE_THIS_FORM' | translate}}</button> <button class=\"btn-black-sm\" ng-click=\"vm.saveThisForm('finish',$event)\">Activate</button></button> <button class=\"btn-black-sm\" ng-click=\"vm.saveThisForm('exit',$event)\">Save & Exit</button> </div> </div> </div> </div> </div> <div class=\"animate-switch-container col-md-10\" ng-switch on=\"vm.configuration.listConfigStep[vm.configuration.configStepCounter]\"> <div class=\"animate-switch\" ng-switch-when=\"init\"> <div id=\"visualPanel\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\"> <h3 class=\"panel-title\"><i class=\"fa fa-eye\"></i>&nbsp;{{'VISUAL_PANEL' | translate}}</h3> </h3> </div> <div class=\"panel-body\"> <!-- lines / columns --> <ul class=\"list-group\"> <li class=\"list-group-item\" style=\"padding:1px\" ng-repeat=\"line in vm.configuration.lines track by $index\"> <!-- columns --> <div ng-switch on=\"line.columns.length\"> <div class=\"row linesList\" ng-switch-when=\"1\"> <div class=\"col-md-1 buttonLeft\" ng-show=\"vm.configuration.lines.length > 1\"><button class=\"btn btn-sm\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\"><i class=\"fa\" ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i></button><button class=\"btn btn-sm btn-danger pull-right\" ng-click=\"vm.removeThisLine($index)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete\"><i class=\"fa fa-trash-o\"></i></button></div> <div class=\"col-md-10\"> <div class=\"col-md-12 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 0)\">{{$index+1}}.&nbsp;{{line.columns[0].control.type !== 'none' ? line.columns[0].control.templateOptions.label || '' : 'column 1'}}</button></div> </div> <div class=\"col-md-1 buttonRight\" ng-show=\"vm.configuration.lines.length > 1\"> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==0\" ng-click=\"vm.upThisLine($index)\"><i class=\"fa fa-arrow-up\"></i></button> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==(vm.configuration.lines.length-1)\" ng-click=\"vm.downThisLine($index)\"><i class=\"fa fa-arrow-down\"></i></button></div> </div> <div class=\"row linesList\" ng-switch-when=\"2\"> <div class=\"col-md-1 buttonLeft\" ng-show=\"vm.configuration.lines.length > 1\"><button class=\"btn btn-sm\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\"><i class=\"fa\" ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i></button><button class=\"btn btn-sm btn-danger pull-right\" ng-click=\"vm.removeThisLine($index)\"><i class=\"fa fa-trash-o\"></i></button></div> <div class=\"col-md-10\"> <div class=\"col-md-6 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 0)\">{{$index+1}}.&nbsp;{{line.columns[0].control.type !== 'none' ? line.columns[0].control.templateOptions.label || '' : 'column 1'}}</button></div> <div class=\"col-md-6 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[1].control.edited, 'btn-success': line.columns[1].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 1)\">{{line.columns[1].control.type !== 'none' ? line.columns[1].control.templateOptions.label || '' : 'column 2'}}</button></div> </div> <div class=\"col-md-1 buttonRight\" ng-show=\"vm.configuration.lines.length > 1\"> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==0\" ng-click=\"vm.upThisLine($index)\"><i class=\"fa fa-arrow-up\"></i></button> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==(vm.configuration.lines.length-1)\" ng-click=\"vm.downThisLine($index)\"><i class=\"fa fa-arrow-down\"></i></button></div> </div> <div class=\"row linesList\" ng-switch-when=\"3\"> <div class=\"col-md-1 buttonLeft\" ng-show=\"vm.configuration.lines.length > 1\"><button class=\"btn btn-sm\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\"><i class=\"fa\" ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i></button><button class=\"btn btn-sm btn-danger pull-right\" ng-click=\"vm.removeThisLine($index)\"><i class=\"fa fa-trash-o\"></i></button></div> <div class=\"col-md-10\"> <div class=\"col-md-4 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 0)\">{{$index+1}}.&nbsp;{{line.columns[0].control.type !== 'none' ? line.columns[0].control.templateOptions.label || '' : 'column 1'}}</button></div> <div class=\"col-md-4 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[1].control.edited, 'btn-success': line.columns[1].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 1)\">{{line.columns[1].control.type !== 'none' ? line.columns[1].control.templateOptions.label|| '' : 'column 2'}}</button></div> <div class=\"col-md-4 well-sm\"> <button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[2].control.edited, 'btn-success': line.columns[2].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 2)\">{{line.columns[2].control.type !== 'none' ? line.columns[2].control.templateOptions.label || '' : 'column 3'}}</button></div> </div> <div class=\"col-md-1 buttonRight\" ng-show=\"vm.configuration.lines.length > 1\"> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==0\" ng-click=\"vm.upThisLine($index)\"><i class=\"fa fa-arrow-up\"></i></button> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==(vm.configuration.lines.length-1)\" ng-click=\"vm.downThisLine($index)\"><i class=\"fa fa-arrow-down\"></i></button></div> </div> <div class=\"row linesList\" ng-switch-when=\"4\"> <div class=\"col-md-1 buttonLeft\" ng-show=\"vm.configuration.lines.length > 1\"><button class=\"btn btn-sm\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\"><i class=\"fa\" ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i></button><button class=\"btn btn-sm btn-danger pull-right\" ng-click=\"vm.removeThisLine($index)\"><i class=\"fa fa-trash-o\"></i></button></div> <div class=\"col-md-10\"> <div class=\"col-md-3 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 0)\">{{$index+1}}.&nbsp;{{line.columns[0].control.type !== 'none' ? line.columns[0].control.templateOptions.label || '' : 'column 1'}}</button></div> <div class=\"col-md-3 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[1].control.edited, 'btn-success': line.columns[1].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 1)\">{{line.columns[1].control.type !== 'none' ? line.columns[1].control.templateOptions.label|| '' : 'column 2'}}</button></div> <div class=\"col-md-3 well-sm\"> <button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[2].control.edited, 'btn-success': line.columns[2].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 2)\">{{line.columns[2].control.type !== 'none' ? line.columns[2].control.templateOptions.label || '' : 'column 3'}}</button></div> <div class=\"col-md-3 well-sm\"> <button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[3].control.edited, 'btn-success': line.columns[3].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 3)\">{{line.columns[3].control.type !== 'none' ? line.columns[3].control.templateOptions.label || '' : 'column 4'}}</button></div> </div> <div class=\"col-md-1 buttonRight\" ng-show=\"vm.configuration.lines.length > 1\"> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==0\" ng-click=\"vm.upThisLine($index)\"><i class=\"fa fa-arrow-up\"></i></button> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==(vm.configuration.lines.length-1)\" ng-click=\"vm.downThisLine($index)\"><i class=\"fa fa-arrow-down\"></i></button></div> </div> <div class=\"row linesList\" ng-switch-when=\"5\"> <div class=\"col-md-1 buttonLeft\" ng-show=\"vm.configuration.lines.length > 1\"><button class=\"btn btn-sm\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\"><i class=\"fa\" ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i></button><button class=\"btn btn-sm btn-danger pull-right\" ng-click=\"vm.removeThisLine($index)\"><i class=\"fa fa-trash-o\"></i></button></div> <div class=\"col-md-10\"> <div class=\"col-md-2 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 0)\">{{$index+1}}.&nbsp;{{line.columns[0].control.type !== 'none' ? line.columns[0].control.templateOptions.label || '' : 'column 1'}}</button></div> <div class=\"col-md-2 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[1].control.edited, 'btn-success': line.columns[1].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 1)\">{{line.columns[1].control.type !== 'none' ? line.columns[1].control.templateOptions.label|| '' : 'column 2'}}</button></div> <div class=\"col-md-2 well-sm\"> <button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[2].control.edited, 'btn-success': line.columns[2].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 2)\">{{line.columns[2].control.type !== 'none' ? line.columns[2].control.templateOptions.label || '' : 'column 3'}}</button></div> <div class=\"col-md-2 well-sm\"> <button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[3].control.edited, 'btn-success': line.columns[3].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 3)\">{{line.columns[3].control.type !== 'none' ? line.columns[3].control.templateOptions.label || '' : 'column 4'}}</button></div> <div class=\"col-md-2 well-sm\"> <button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[4].control.edited, 'btn-success': line.columns[4].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 4)\">{{line.columns[4].control.type !== 'none' ? line.columns[4].control.templateOptions.label || '' : 'column 5'}}</button></div> </div> <div class=\"col-md-1 buttonRight\" ng-show=\"vm.configuration.lines.length > 1\"> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==0\" ng-click=\"vm.upThisLine($index)\"><i class=\"fa fa-arrow-up\"></i></button> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==(vm.configuration.lines.length-1)\" ng-click=\"vm.downThisLine($index)\"><i class=\"fa fa-arrow-down\"></i></button></div> </div> <div class=\"row linesList\" ng-switch-when=\"6\"> <div class=\"col-md-1 buttonLeft\" ng-show=\"vm.configuration.lines.length > 1\"><button class=\"btn btn-sm\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\"><i class=\"fa\" ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i></button><button class=\"btn btn-sm btn-danger pull-right\" ng-click=\"vm.removeThisLine($index)\"><i class=\"fa fa-trash-o\"></i></button></div> <div class=\"col-md-10\"> <div class=\"col-md-2 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 0)\">{{$index+1}}.&nbsp;{{line.columns[0].control.type !== 'none' ? line.columns[0].control.templateOptions.label || '' : 'column 1'}}</button></div> <div class=\"col-md-2 well-sm\"><button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[1].control.edited, 'btn-success': line.columns[1].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 1)\">{{line.columns[1].control.type !== 'none' ? line.columns[1].control.templateOptions.label|| '' : 'column 2'}}</button></div> <div class=\"col-md-2 well-sm\"> <button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[2].control.edited, 'btn-success': line.columns[2].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 2)\">{{line.columns[2].control.type !== 'none' ? line.columns[2].control.templateOptions.label || '' : 'column 3'}}</button></div> <div class=\"col-md-2 well-sm\"> <button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[3].control.edited, 'btn-success': line.columns[3].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 3)\">{{line.columns[3].control.type !== 'none' ? line.columns[3].control.templateOptions.label || '' : 'column 4'}}</button></div> <div class=\"col-md-2 well-sm\"> <button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[4].control.edited, 'btn-success': line.columns[4].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 4)\">{{line.columns[4].control.type !== 'none' ? line.columns[4].control.templateOptions.label || '' : 'column 5'}}</button></div> <div class=\"col-md-2 well-sm\"> <button style=\"text-align:left\" class=\"btn btn-block\" ng-class=\"{'btn-primary': !line.columns[5].control.edited, 'btn-success': line.columns[5].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 5)\">{{line.columns[5].control.type !== 'none' ? line.columns[5].control.templateOptions.label || '' : 'column 6'}}</button></div> </div> <div class=\"col-md-1 buttonRight\" ng-show=\"vm.configuration.lines.length > 1\"> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==0\" ng-click=\"vm.upThisLine($index)\"><i class=\"fa fa-arrow-up\"></i></button> <button class=\"btn btn-sm btn-warning pull-right\" ng-hide=\"$index==(vm.configuration.lines.length-1)\" ng-click=\"vm.downThisLine($index)\"><i class=\"fa fa-arrow-down\"></i></button></div> </div> </div> </li> </ul> <nav class=\"pagin col-sm-offset-4 col-sm-6\" ng-if=\"vm.loadingPagination.show\"> <ul class=\"pagination\"> <li ng-class=\"{disabled:vm.loadingPagination.pageIndex == 1}\"><a ng-click=\"vm.loadingPagination.pageIndex!=1?vm.switchPage(1):none\"><span aria-hidden=\"true\">First</span></a> </li> <li ng-class=\"{disabled:vm.loadingPagination.pageIndex == 1}\"><a ng-click=\"vm.loadingPagination.pageIndex>=2?vm.switchPage(vm.loadingPagination.pageIndex-1):none\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a> </li> <li ng-show=\"(index-vm.loadingPagination.pageIndex<3&&index>0&&index-vm.loadingPagination.pageIndex>-3)\" ng-repeat=\"index in [] | range:vm.loadingPagination.maxIndex+1\" ng-class=\"{'active':index==vm.loadingPagination.pageIndex}\"> <a ng-click=\"vm.switchPage(index)\">{{index}} </a> </li> <li ng-class=\"{disabled:vm.loadingPagination.pageIndex == vm.loadingPagination.maxIndex}\"><a ng-click=\"vm.loadingPagination.pageIndex<vm.loadingPagination.maxIndex?vm.switchPage(vm.loadingPagination.pageIndex+1):none\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a> </li> <li ng-class=\"{disabled:vm.loadingPagination.pageIndex == vm.loadingPagination.maxIndex}\"><a ng-click=\"vm.loadingPagination.pageIndex != vm.loadingPagination.maxIndex?vm.switchPage(vm.loadingPagination.maxIndex):none\" aria-label=\"Next\"><span aria-hidden=\"true\">Last</span></a> </li> <span class=\"changePaginationPage\"><span>Page No:</span><input type=\"number\" ng-model=\"pageNumber\"><button class=\"btn-red-sm\" ng-click=\"vm.switchPage(pageNumber)\">Go</button></span> </ul> </nav> </div> </div> </div> </div> <div class=\"animate-switch\" ng-switch-when=\"first\"> <div id=\"visualPanel\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\"> <h3 class=\"panel-title\"><i class=\"fa fa-thumbs-o-up\"></i>&nbsp;{{'FINAL_STEP' | translate}}</h3> </div> <div class=\"panel-body\"> <form ng-submit=\"vm.onSubmit()\"> <formly-form id=\"saveFormlyFom\" model=\"vm.dataModel\" fields=\"vm.wfFormFields\"></formly-form> </form> </div> <nav class=\"pagin col-sm-offset-5 col-sm-6\" ng-if=\"vm.loadingPagination.show\"> <ul class=\"pagination\"> <li ng-class=\"{disabled:vm.loadingPagination.pageIndexPreview == 1}\"><a ng-click=\"vm.loadingPagination.pageIndexPreview!=1?vm.switchPagePreview(1):none\"><span aria-hidden=\"true\">First</span></a> </li> <li ng-class=\"{disabled:vm.loadingPagination.pageIndexPreview == 1}\"><a ng-click=\"vm.loadingPagination.pageIndexPreview>=2?vm.switchPagePreview(vm.loadingPagination.pageIndexPreview-1):none\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a> </li> <li ng-show=\"(index-vm.loadingPagination.pageIndex<3&&index>0&&index-vm.loadingPagination.pageIndex>-3)\" ng-repeat=\"index in [] | range:vm.loadingPagination.maxIndex+1\" ng-class=\"{'active':index==vm.loadingPagination.pageIndexPreview}\"><a ng-click=\"vm.switchPagePreview(index)\">{{index}} </a> </li> <li ng-class=\"{disabled:vm.loadingPagination.pageIndexPreview == vm.loadingPagination.maxIndex}\"><a ng-click=\"vm.loadingPagination.pageIndexPreview<vm.loadingPagination.maxIndex?vm.switchPagePreview(vm.loadingPagination.pageIndexPreview+1):none\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a> </li> <li ng-class=\"{disabled:vm.loadingPagination.pageIndexPreview == vm.loadingPagination.maxIndex}\"><a ng-click=\"vm.loadingPagination.pageIndexPreview != vm.loadingPagination.maxIndex?vm.switchPagePreview(vm.loadingPagination.maxIndex):none\" aria-label=\"Next\"><span aria-hidden=\"true\">Last</span></a> </li> </ul> </nav> </div> </div> </div> </div> </div> </div> </tab> <tab active=\"vm.tab.previewTab.active\" ng-if=\"vm.tab.previewTab.tabVisible\" heading=\"{{'PREVIEW_TAB' | translate}}\"> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <!-- formly here --> <form ng-submit=\"vm.onSubmit()\"> <formly-form id=\"previewFormlyForm\" model=\"vm.dataModel\" fields=\"vm.wfFormFields\"></formly-form> </form> </div><nav class=\"pagin col-sm-offset-5 col-sm-6\" ng-if=\"vm.loadingPagination.show\"> <ul class=\"pagination\"> <li ng-class=\"{disabled:vm.loadingPagination.pageIndexPreview == 1}\"><a ng-click=\"vm.loadingPagination.pageIndexPreview!=1?vm.switchPagePreview(1):none\"><span aria-hidden=\"true\">First</span></a> </li> <li ng-class=\"{disabled:vm.loadingPagination.pageIndexPreview == 1}\"><a ng-click=\"vm.loadingPagination.pageIndexPreview>=2?vm.switchPagePreview(vm.loadingPagination.pageIndexPreview-1):none\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a> </li> <li ng-show=\"(index-vm.loadingPagination.pageIndex<3&&index>0&&index-vm.loadingPagination.pageIndex>-3)\" ng-repeat=\"index in [] | range:vm.loadingPagination.maxIndex+1\" ng-class=\"{'active':index==vm.loadingPagination.pageIndexPreview}\"><a ng-click=\"vm.switchPagePreview(index)\">{{index}} </a> </li> <li ng-class=\"{disabled:vm.loadingPagination.pageIndexPreview == vm.loadingPagination.maxIndex}\"><a ng-click=\"vm.loadingPagination.pageIndexPreview<vm.loadingPagination.maxIndex?vm.switchPagePreview(vm.loadingPagination.pageIndexPreview+1):none\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a> </li> <li ng-class=\"{disabled:vm.loadingPagination.pageIndexPreview == vm.loadingPagination.maxIndex}\"><a ng-click=\"vm.loadingPagination.pageIndexPreview != vm.loadingPagination.maxIndex?vm.switchPagePreview(vm.loadingPagination.maxIndex):none\" aria-label=\"Next\"><span aria-hidden=\"true\">Last</span></a> </li> </ul> </nav></div> </tab> </tabset> </div> </div> </section> <hr/> <!--<section><h6 class=\"text-right\">Easy form generator : {{vm.easyFormGeneratorVERSION}} — Erwan DATIN (MacKentoch)</h6></section>--> </div> </div></section>";
    global.define = __define;
    return module.exports;
  });
  $__System.register('11', [], function (_export) {
    /* global angular */
    'use strict';
    var DEBUG_MODEL, initDebugModel, DEFAULT_TAB_MODEL, initTabModel, COLUMN_TEMPLATE, initColumnTemplate, LINE_TEMPLATE, initLineTemplate, M_COLUMN_TEMPLATE, initMatrixColumnTemplate, M_LINE_TEMPLATE, initMatrixLineTemplate;
    return {
      setters: [],
      execute: function () {
        DEBUG_MODEL = {
          showDebug: false,
          configurationModelNumberofLines: 1
        };
        initDebugModel = function initDebugModel() {
          return angular.copy(DEBUG_MODEL);
        };
        DEFAULT_TAB_MODEL = {
          editTab: {
            active: true
          },
          previewTab: {
            active: false,
            tabVisible: true,
            modelsVisible: true
          }
        };
        initTabModel = function initTabModel(isPreviewPanelVisible, arePreviewModelsVisible) {
          var _tabModel = angular.copy(DEFAULT_TAB_MODEL);
          angular.extend(_tabModel.previewTab, {
            tabVisible: isPreviewPanelVisible,
            modelsVisible: arePreviewModelsVisible
          });
          return _tabModel;
        };
        COLUMN_TEMPLATE = {
          numColumn: - 1,
          exist: true,
          control: {
            type: 'none',
            key: 'none',
            subtype: 'none'
          }
        };
        // templateOptions: {
        //                     label: 'none',
        //                     placeholder: 'none',
        //                     required: false,
        //                     description: 'Descriptive text'
        //                   }

        initColumnTemplate = function initColumnTemplate() {
          return angular.copy(COLUMN_TEMPLATE);
        };
        LINE_TEMPLATE = {
          line: - 1,
          activeColumn: 1,
          columns: [{
            numColumn: 1,
            exist: true,
            control: {
              type: 'none',
              key: 'none'
            }
          }]
        };
        // templateOptions: {
        //                     label: 'none',
        //                     placeholder: 'none',
        //                     required: false,
        //                     description: 'Descriptive text'
        //                   }

        initLineTemplate = function initLineTemplate() {
          return angular.copy(LINE_TEMPLATE);
        };
        M_LINE_TEMPLATE = {
          line: - 1,
          activeColumn: 1,
          columns: [{
            numColumn: 1,
            exist: true,
            control: {
              type: 'label',
              key: 'none',
              subtype: '',
              selectedControl: "Label",
              edited: true,
              templateOptions: {
                label: 'Matrix Label',
                placeholder: 'Matrix Label'
              }
            }

          }]
        };
        initMatrixLineTemplate = function() {
          return angular.copy(M_LINE_TEMPLATE);
        };
        M_COLUMN_TEMPLATE = {
          numColumn: - 1,
          exist: true,
          control: {
            type: 'label',
            key: 'none',
            subtype: 'none',
            selectedControl: "Label",
            edited: true,
            templateOptions: {
              label: 'Matrix Label',
              placeholder: 'Matrix Label'
            }
          }
        };
        initMatrixColumnTemplate = function() {
          return angular.copy(M_COLUMN_TEMPLATE);
        };
        _export('initDebugModel', initDebugModel);
        _export('initTabModel', initTabModel);
        _export('initColumnTemplate', initColumnTemplate);
        _export('initLineTemplate', initLineTemplate);
        _export('initMatrixColumnTemplate', initMatrixColumnTemplate);
        _export('initMatrixLineTemplate', initMatrixLineTemplate);
      }
    };
  });
  $__System.registerDynamic("12", [], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    module.exports = "<div class=\"modal-header\"> <h3 class=\"modal-title greyText\"> {{'SELECT_A_CTRL' | translate}} </h3></div><div class=\"modal-body\"> <hr/> <div class=\"row\"> <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-filter\"></i> &nbsp; {{'SELECT_CTRL_IN_LIST' | translate}} : </h5> </div> <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"> <ol class=\"nya-bs-select col-xs-12 col-sm-12 col-md-12 col-lg-12\" ng-model=\"editControlModCtrl.modelNyaSelect\" data-live-search=\"false\"> <li nya-bs-option=\"option in editControlModCtrl.nyaSelectFiltered.controls group by option.group\"> <span class=\"dropdown-header greyText\">{{$group}}</span> <!-- group header cannot be searched --> <a ng-click=\"editControlModCtrl.selectThisControl(option.id)\"> <span> {{ option.name }} </span> <span class=\"glyphicon glyphicon-ok check-mark\"></span> </a> </li> </ol> </div> </div> <hr/> <div ng-switch on=\"editControlModCtrl.nyaSelect.selectedControl\"> <!--no control selected--> <div ng-switch-when=\"none\"> <div class=\"row\"> <div class=\"col-sm-12\"> <h5 class=\"text-center texteRouge\"> <i class=\"fa fa-arrow-up\"></i> &nbsp; {{'SELECT_A_CTRL' | translate}} </h5> </div> </div> </div> <!--empty (or blank) control --> <div ng-switch-when=\"empty\"> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-eye\"></i> &nbsp; {{'PREVIEW_TAB' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"col-sm-12\"> <h5 class=\"text-center greyText\"> {{'COL_WILL_BE_BLANK' | translate}} </h5> </div> </div> </div> </div> </div> <!--page break control --> <div ng-switch-when=\"page\"> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-eye\"></i> &nbsp; {{'PREVIEW_TAB' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"col-sm-12\"> <h5 class=\"text-center greyText\"> {{'COL_WILL_BE_BLANK' | translate}} </h5> </div> </div> </div> </div> </div> <!--header--> <div ng-switch-when=\"Header\"> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'HEADER_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" ng-change=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel = editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" id=\"inputHeaderTextUpdate\" placeholder=\"{{'ADD_EDIT_HEADER_HERE' | translate}}\"> </div> </div> </div> </div> </div> </div> <!--Subtitle--> <div ng-switch-when=\"Subtitle\"> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputSubTitleTextUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'SUBTITLE_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" ng-change=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel = editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" id=\"inputSubTitleTextUpdate\" placeholder=\"{{'ADD_EDIT_SUBTIL_HERE' | translate}}\"> </div> </div> </div> </div> </div> </div> <!--Subsection--> <div ng-switch-when=\"Subsection\"> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputSubSectionTextUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Subsection text : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" ng-change=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel = editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" id=\"inputSubSectionTextUpdate\" placeholder=\"Add / edit Subsection text here\"> </div> </div> </div> </div> </div> </div> <!--Label--> <div ng-switch-when=\"Label\"> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputLabelTextUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Label text : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" ng-change=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel = editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" id=\"inputLabelTextUpdate\" placeholder=\" Add / edit label text here\"> </div> </div> </div> </div> </div> </div> <!-- TextInput --> <div ng-switch-when=\"TextInput\"> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextplaceholderUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'PLACEHOLDER' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" id=\"inputTextplaceholderUpdate\" placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'REQUIRED' | translate}} : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\">&nbsp;</div> <input type=\"checkbox\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDefaultValueUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Default Value : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\" id=\"inputTextDefaultValueUpdate\" placeholder=\"Enter the Default Value\"> </div> </div> </div> </div> </div> </div> <!-- password --> <div ng-switch-when=\"Password\"> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextplaceholderUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'PLACEHOLDER' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" id=\"inputTextplaceholderUpdate\" placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'REQUIRED' | translate}} : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\"> &nbsp; </div> <input type=\"checkbox\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDefaultValueUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Default Value : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\" id=\"inputTextDefaultValueUpdate\" placeholder=\"Enter the Default Value\"> </div> </div> </div> </div> </div> </div> <div ng-switch-when=\"Email\"> <!-- Email --> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextplaceholderUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'PLACEHOLDER' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" id=\"inputTextplaceholderUpdate\" placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'REQUIRED' | translate}} : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\"> &nbsp; </div> <input type=\"checkbox\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDefaultValueUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Default Value : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\" id=\"inputTextDefaultValueUpdate\" placeholder=\"Enter the Default Value\"> </div> </div> </div> </div> </div> </div> <div ng-switch-when=\"Number\"> <!-- Number --> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextplaceholderUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'PLACEHOLDER' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" id=\"inputTextplaceholderUpdate\" placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'REQUIRED' | translate}} : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\"> &nbsp; </div> <input type=\"checkbox\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDefaultValueUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Default Value : </label> <div class=\"col-lg-9\"> <input type=\"number\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\" id=\"inputTextDefaultValueUpdate\" placeholder=\"Enter the Default Value\"> </div> </div> </div> </div> </div> </div> <div ng-switch-when=\"IPAddress\"> <!-- IPAddress --> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextplaceholderUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'PLACEHOLDER' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\" id=\"inputTextplaceholderUpdate\" placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'REQUIRED' | translate}} : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\"> &nbsp; </div> <input type=\"checkbox\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDefaultValueUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Default Value : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\" id=\"inputTextDefaultValueUpdate\" placeholder=\"Enter the Default Value\"> </div> </div> </div> </div> </div> </div> <div ng-switch-when=\"Date\"> <!-- datetimepicker (input type date not ok in all browsers) --> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'DATE_FORMAT' | translate}} : </label> <div class=\"col-lg-9\"> <ol class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.datepickerPopup\" id=\"dateformatSelect\"> <li class=\"nya-bs-option\" nya-bs-option=\"dateformat in editControlModCtrl.demodt.formats\" value=\"dateformat\"> <a> {{dateformat}} </a> </li> </ol> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'REQUIRED' | translate}} : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\"> &nbsp; </div> <input type=\"checkbox\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> </div> </div> </div> <div ng-switch-when=\"Texarea\"> <!-- textarea --> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'REQUIRED' | translate}} : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\"> &nbsp; </div> <input type=\"checkbox\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDefaultValueUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Default Value : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\" id=\"inputTextDefaultValueUpdate\" placeholder=\"Enter the Default Value\"> </div> </div> </div> </div> </div> </div> <div ng-switch-when=\"RichTextEditor\"> <!-- RichTextEditor --> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <!-- required can't be applied to rich text editor (textAngular) right now --> <!--<div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\">Required : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\"> &nbsp; </div> <input type=\"checkbox\" ng-model=\"nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div>--> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDefaultValueUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Default Value : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDefaultValue\" id=\"inputTextDefaultValueUpdate\" placeholder=\"Enter the Default Value\"> </div> </div> </div> </div> </div> </div> <div ng-switch-when=\"Radio\"> <!-- radios --> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'REQUIRED' | translate}} : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\"> &nbsp; </div> <input type=\"checkbox\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> <hr/> <div class=\"row\"> <div class=\"col-lg-3 col-md-3\"> <label for=\"radioRowCollection\" class=\" control-label greyText editPropertiesLabel\"> {{'ADD_NEW_RADIO' | translate}} : </label> </div> </div> <div class=\"row\"> <div> <div class=\"form-group\"> <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\"> <input type=\"text\" class=\"form-control\" id=\"inputAddNewRadioOption\" placeholder=\"{{'ADD_RADIO_PLACEHOLD' | translate}}\" ng-model=\"editControlModCtrl.newOptionRadio.saisie\"> </div> <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\"> <button class=\"btn btn-primary\" ng-click=\"editControlModCtrl.addNewOptionRadio()\"> {{'ADD' | translate}} </button> </div> </div> </div> </div> <div class=\"row\"> <div class=\"col-lg-3 col-md-3\"> <label for=\"radioRowCollection\" class=\" control-label greyText editPropertiesLabel\"> {{'EDIT_REMOVE_RADIO' | translate}} : </label> </div> </div> <div class=\"row\"> <div class=\"form-group\"> <div class-\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=\"container\"> <div ng-show=\"editControlModCtrl.radioRowCollection.rows.length === 0\"> <h5 class=\"text-center greyText\"> <em> - {{'NO_RADIO_ADD_NEW' | translate}} - </em> </h5> </div> <table ng-if=\"editControlModCtrl.radioRowCollection.rows.length > 0\" class=\"table table-striped\"> <thead> <tr> <th st-ratio=\"20\"> {{'ORDER' | translate}} </th> <th st-ratio=\"55\"> {{'OPTION' | translate}} </th> <th st-ratio=\"25\"> </th> </tr> <tr> <th st-ratio=\"20\"> </th> <th st-ratio=\"55\"> <input ng-model=\"editControlModCtrl.radioFilter\" placeholder=\"{{'SEARCH_4_OPTION' | translate}}\" class=\"input-sm form-control\" type=\"search\" /> </th> <th st-ratio=\"25\"> </th> </tr> </thead> <tbody> <tr ng-repeat=\"radioRow in editControlModCtrl.radioRowCollection.rows | filter:editControlModCtrl.radioFilter as radioRow\"> <td st-ratio=\"20\"> {{$index}} </td> <td st-ratio=\"55\"> {{radioRow.option}} </td> <td st-ratio=\"25\"> <div class=\"pull-right\"> <button class=\"btn btn-primary\" ng-click=\"editControlModCtrl.upThisRadioRow($index)\"> <i class=\"fa fa-arrow-up\"></i> </button> <button class=\"btn btn-primary\" ng-click=\"editControlModCtrl.downThisRadioRow($index)\"> <i class=\"fa fa-arrow-down\"></i> </button> <button class=\"btn btn-danger\" ng-click=\"editControlModCtrl.removeRadioRow($index)\"> <i class=\"fa fa-trash-o\"></i> </button> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div></div><div ng-switch-when=\"Checkbox\"> <!-- checkbox --> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'REQUIRED' | translate}} : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\">&nbsp;</div> <input type=\"checkbox\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> </div> </div></div><div ng-switch-when=\"BasicSelect\"> <!-- basic selects --> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextRequiredUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Required : </label> <div class=\"col-lg-9\"> <div class=\"checkboxCssCorrection\"> &nbsp; </div> <input type=\"checkbox\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> <hr/> <div class=\"row\"> <div class=\"col-lg-3 col-md-3\"> <label for=\"basicSelectRowCollection\" class=\" control-label greyText editPropertiesLabel\"> {{'ADD_NEW_OPTIONS' | translate}} : </label> </div> </div> <div class=\"row\"> <div> <div class=\"form-group\"> <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\"> <input type=\"text\" class=\"form-control\" id=\"inputAddNewBasicOption\" placeholder=\"{{'ADD_A_NEW_OPTION' | translate}}\" ng-model=\"editControlModCtrl.newOptionBasicSelect.saisie\"> </div> <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\"> <button class=\"btn-red-sm\" ng-click=\"editControlModCtrl.addNewOptionBasicSelect()\"> {{'ADD' | translate}} </button> </div> </div> </div> </div> <div class=\"row\"> <div class=\"col-lg-3 col-md-3\"> <label class=\" control-label greyText editPropertiesLabel\"> {{'EDIT_REMOVE_OPTIONS' | translate}} : </label> </div> </div> <div class=\"row\"> <div class=\"form-group\"> <div class-\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=\"container\"> <div ng-if=\"editControlModCtrl.basicSelectRowCollection.rows.length === 0\"> <h5 class=\"text-center greyText\"> <em> - {{'NO_OPTION_ADD_NEW' | translate}} - </em> </h5> </div> <table ng-if=\"editControlModCtrl.basicSelectRowCollection.rows.length > 0\" class=\"table table-striped\"> <thead> <tr> <th st-ratio=\"20\"> {{'ORDER' | translate}} </th> <th st-ratio=\"55\"> {{'OPTION' | translate}} </th> <th st-ratio=\"25\"> </th> </tr> <tr> <th st-ratio=\"20\"> </th> <th st-ratio=\"55\"> <input ng-model=\"basicSelectFilter\" placeholder=\"{{'SEARCH_4_OPTION' | translate}}\" class=\"input-sm form-control\" type=\"search\" /> </th> <th st-ratio=\"25\"> </th> </tr> </thead> <tbody> <tr ng-repeat=\"basicSelectRow in editControlModCtrl.basicSelectRowCollection.rows | filter:basicSelectFilter as basicSelectRow\"> <td st-ratio=\"20\"> {{$index}} </td> <td st-ratio=\"55\"> {{basicSelectRow.option}} </td> <td st-ratio=\"25\"> <div class=\"pull-right\"> <button class=\"btn btn-primary\" ng-click=\"editControlModCtrl.upThisRow($index)\"> <i class=\"fa fa-arrow-up\"></i> </button> <button class=\"btn btn-primary\" ng-click=\"editControlModCtrl.downThisRow($index)\"> <i class=\"fa fa-arrow-down\"></i> </button> <button class=\"btn btn-danger\" ng-click=\"editControlModCtrl.removeRow($index)\"> <i class=\"fa fa-trash-o\"></i> </button> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div></div></div> </div> <!-- grouped selects --> <div ng-switch-when=\"GroupedSelect\"> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-12\"> <h5 class=\"greyText\"> <i class=\"fa fa-pencil-square-o\"></i> &nbsp; {{'EDIT_PROPERTIES' | translate}} : </h5> </div> </div> <hr/> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextLabelUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'LABEL_TEXT' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\" id=\"inputTextLabelUpdate\" placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextDescriptionUpdate\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> {{'DESCRIPTION' | translate}} : </label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\" placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\"> </div> </div> </div> <div class=\"marginTopFivepixels\"></div> <div class=\"row\"> <div class=\"form-group\"> <label for=\"inputTextKeyId\" class=\"col-lg-3 control-label greyText editPropertiesLabel\"> Key<span class=\"redText\">*<span><span class=\"blackText\"> : </span></label> <div class=\"col-lg-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyQuestionKey\" id=\"inputTextKeyId\" placeholder=\"Enter the Key\"> </div> </div> </div> <hr/> <div class=\"row\"> <div class=\"col-lg-3 col-md-3\"> <label for=\"groupedSelectRowCollection\" class=\" control-label greyText editPropertiesLabel\"> {{'ADD_NEW_OPTIONS' | translate}} : </label> </div> </div> <div class=\"row\"> <div> <div class=\"form-group\"> <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\"> <input type=\"text\" class=\"form-control\" id=\"inputAddNewGroupedOption\" placeholder=\"{{'ADD_A_NEW_OPTION' | translate}}\" ng-model=\"editControlModCtrl.newOptionGroupedSelect.saisie\"> </div> <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\"> <button class=\"btn btn-primary\" ng-click=\"editControlModCtrl.addNewOptionGroupedSelect()\"> {{'ADD' | translate}} </button> </div> </div> </div> </div> <div class=\"row\"> <div class=\"col-lg-3 col-md-3\"> <label for=\"groupedSelectRowCollection\" class=\" control-label greyText editPropertiesLabel\"> {{'ADD_NEW_GROUPS' | translate}} : </label> </div> </div> <div class=\"row\"> <div> <div class=\"form-group\"> <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\"> <input id=\"inputAddNewGroupGroupedOption\" type=\"text\" class=\"form-control\" ng-model=\"editControlModCtrl.newGroupGroupedSelect.saisie\" id=\"inputTextLabelUpdateGroupedSelect\" placeholder=\"{{'ADD_A_NEW_GROUP' | translate}}\"> </div> <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\"> <button class=\"btn btn-primary\" ng-click=\"editControlModCtrl.addNewGroupToGroupedSelect()\"> {{'ADD' | translate}} </button> </div> </div> </div> </div> <div class=\"row\"> <div class=\"col-lg-3 col-md-3\"> <label class=\" control-label greyText editPropertiesLabel\"> {{'EDIT_GROUPS_OPTIONS' | translate}} : </label> </div> </div> <div class=\"row\"> <div class=\"form-group\"> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=\"container\"> <div ng-if=\"editControlModCtrl.groupedSelectRowCollection.rows.length === 0\"> <h5 class=\"text-center greyText\"> <em> - {{'NO_OPTION_ADD_NEW' | translate}} - </em> </h5> </div> <table ng-if=\"editControlModCtrl.groupedSelectRowCollection.rows.length\" class=\"table table-striped\"> <thead> <tr> <th st-ratio=\"20\"> {{'ORDER' | translate}} </th> <th st-ratio=\"25\"> {{'GROUP' | translate}} </th> <th st-ratio=\"30\"> {{'OPTION' | translate}} </th> <th st-ratio=\"25\"> </th> </tr> <tr> <th st-ratio=\"20\"> </th> <th st-ratio=\"25\"> </th> <th st-ratio=\"30\"> <input ng-model=\"editControlModCtrl.groupedSelectFilter\" placeholder=\"{{'SEARCH_4_OPTION' | translate}}\" class=\"input-sm form-control\" type=\"search\" /> </th> <th st-ratio=\"25\"> </th> </tr> </thead> <tbody> <tr ng-repeat=\"groupedSelectRow in editControlModCtrl.groupedSelectRowCollection.rows | filter:editControlModCtrl.groupedSelectFilter as groupedSelectRow\"> <td st-ratio=\"20\"> {{$index}} </td> <td st-ratio=\"25\"> <div ng-if=\"editControlModCtrl.groupSelectGroupClick.showList === true\"> <div ng-if=\"editControlModCtrl.GroupedSelectGroups.list.length === 0\"> <p class=\"text-left noGroupText\">- {{'NO_GROUP_ADD_NEW' | translate}} -</p> </div> <div ng-if=\"editControlModCtrl.GroupedSelectGroups.list.length > 0\"> <ol class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12 editGroupedSelectnyaSelect\" ng-model=\"groupedSelectRow.group\" id=\"modelGroupedOptionGroupedChoose\" disabled=\"editControlModCtrl.GroupedSelectGroups.list.length === 0\"> <li class=\"nya-bs-option\" nya-bs-option=\"GroupedSelectGroup in editControlModCtrl.GroupedSelectGroups.list\" value=\"GroupedSelectGroup\"> <a>{{GroupedSelectGroup}}</a> </li> </ol> </div> </div> <div ng-if=\"editControlModCtrl.groupSelectGroupClick.showList === false\"> {{groupedSelectRow.group}} </div> </td> <td st-ratio=\"30\"> {{groupedSelectRow.option}} </td> <td st-ratio=\"25\"> <div class=\"pull-right\"> <button class=\"btn btn-primary\" ng-click=\"editControlModCtrl.upThisGroupedSelectRow($index)\"> <i class=\"fa fa-arrow-up\"></i> </button> <button class=\"btn btn-primary\" ng-click=\"editControlModCtrl.downThisGroupedSelectRow($index)\"> <i class=\"fa fa-arrow-down\"></i> </button> <button class=\"btn btn-warning\" ng-click=\"editControlModCtrl.showGroupListToChoose()\"> <i class=\"fa fa-pencil-square-o\"></i> </button> <button class=\"btn btn-danger\" ng-click=\"editControlModCtrl.removeGroupedSelectRow($index)\"> <i class=\"fa fa-trash-o\"></i> </button> </div> </td> </tr> </tbody> </table> </div> </div></div></div> </div> </div> </div> </div></div><div class=\"modal-footer\"> <button class=\"btn-red-sm\" ng-class=\"{'disabled': editControlModCtrl.nyaSelect.selectedControl === 'none'}\" ng-click=\"editControlModCtrl.ok()\"> {{'OK' | translate}} </button> <button class=\"btn-black-sm\" ng-click=\"editControlModCtrl.cancel()\"> {{'CANCEL' | translate}} </button></div>";
    global.define = __define;
    return module.exports;
  });
  $__System.register('13', ['11', '12', '14', '15', '16'], function (_export) {
    var initDebugModel, initTabModel, initColumnTemplate, initLineTemplate, initMatrixColumnTemplate, initMatrixLineTemplate, editControlModalTemplate, EDIT_MODAL_CONTROLLER_NAME, EDIT_MODAL_CONTROLLERAS_NAME, _createClass, _classCallCheck, STEP_WAY_MAIN_CONTROLLER_NAME, STEP_WAY_MAIN_CONTROLLERAS_NAME, edaStepWayEasyFormGenController, toInject;
    return {
      setters: [function (_3) {
        initDebugModel = _3.initDebugModel;
        initTabModel = _3.initTabModel;
        initColumnTemplate = _3.initColumnTemplate;
        initLineTemplate = _3.initLineTemplate;
        initMatrixColumnTemplate = _3.initMatrixColumnTemplate;
        initMatrixLineTemplate = _3.initMatrixLineTemplate;
      }, function (_4) {
        editControlModalTemplate = _4['default'];
      }, function (_5) {
        EDIT_MODAL_CONTROLLER_NAME = _5.EDIT_MODAL_CONTROLLER_NAME;
        EDIT_MODAL_CONTROLLERAS_NAME = _5.EDIT_MODAL_CONTROLLERAS_NAME;
      }, function (_) {
        _createClass = _['default'];
      }, function (_2) {
        _classCallCheck = _2['default'];
      }],
      execute: function () {
        /* global angular */
        'use strict';
        STEP_WAY_MAIN_CONTROLLER_NAME = 'edaStepWayEasyFormGenController';
        STEP_WAY_MAIN_CONTROLLERAS_NAME = 'vm';
        edaStepWayEasyFormGenController = (function () {
          function edaStepWayEasyFormGenController(easyFormGenVersion, $filter, toaster, $timeout, $modal, $log, $formlyProxy, $modalProxy, easyFormSteWayConfig) {
            _classCallCheck(this, edaStepWayEasyFormGenController);
            this.easyFormGenVersion = easyFormGenVersion;
            this.$filter = $filter;
            this.toaster = toaster;
            this.$timeout = $timeout;
            this.$modal = $modal;
            this.$log = $log;
            this.$formlyProxy = $formlyProxy;
            this.$modalProxy = $modalProxy;
            this.easyFormSteWayConfig = easyFormSteWayConfig;
            this.init();
          }

          _createClass(edaStepWayEasyFormGenController, [{
            key: 'init',
            value: function init() {
              this.dataModel = {};
              this.wfFormFields = [];
              this.wfFormFieldsOnlyNeededProperties = [];
              this.easyFormGeneratorVERSION = this.easyFormGenVersion;
              this.debug = initDebugModel();
              this.tab = initTabModel(this.easyFormSteWayConfig.isPreviewPanelVisible(), this.easyFormSteWayConfig.arePreviewModelsVisible());
              this.configuration = {}; //configuration model (contains array of lines which contains array of columns)
              this.numberOfColumns = 1;
              this.MaxNumberOfColumns = 6;
              this.MinNumberOfColumns = 1;
              this.columnTemplate = initColumnTemplate(); //TODO : check is really needed
              this.lineTemplate = initLineTemplate(); //TODO : check if really needed
              this.nyaSelect = {};
              this.animationsEnabled = this.easyFormSteWayConfig.getModalAnimationValue(); //-> disabling animation untill correction in angular bootstrap
              this.editControlModalSize = 'lg';
              this.formlyList = {};
              this.previewLoadedForm = { fieldsModel: [] };
              this.configurationLoaded = {};
              this.qAction = "save";
              this.edaAutoSaveFlag = false;
              this.counter = 1;
              this.edaEnterFlag = false;
//                        this.modalOpenFlag = false;
              this.returnSaveEvent = false;
              //this.resetToZeroModel         = resetToZeroModel; //function no more used

              this.$formlyProxy.initConfigurationEditFromScratch(this.configuration);
              this.$modalProxy.initNyaSelect(this.nyaSelect);
            }
          }, {
            key: 'onSubmit',
            value: function onSubmit() {
              var JSONedModel = this.$filter('json')(this.dataModel, 4);
              this.toaster.pop({
                type: 'info',
                timeout: 2000,
                title: 'it should save data model if it were not in editor',
                body: 'data : ' + JSONedModel,
                showCloseButton: true
              });
            }
          }, {
            key: 'countConfigurationModelLines',
            value: function countConfigurationModelLines() {
              this.debug.configurationModelNumberofLines = this.configuration.lines.length;
              return this.configuration.lines.length;
            }
          }, {
            key: 'setActiveLineNumber',
            value: function setActiveLineNumber(lineNumber) {
              if (lineNumber <= this.countConfigurationModelLines()) this.configuration.activeLine = lineNumber;
            }
          }, {
            key: 'upThisLine',
            value: function upThisLine(indexLine) {
              //indexLine starts from 0;
              if (indexLine > - 1) {
                if (this.configuration.lines[indexLine - 1]) {
                  var currentLineObj = this.configuration.lines[indexLine];
                  this.configuration.lines.splice(indexLine, 1);
                  this.configuration.lines.splice(indexLine - 1, 0, currentLineObj);
                  //manage selected aciveLine
                  this.configuration.activeLine = indexLine;
                }
              }
              //re-render formfield
              this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
              this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
            }
          }, {
            key: 'downThisLine',
            value: function downThisLine(indexLine) {
              if (indexLine > - 1) {
                if (this.configuration.lines[indexLine + 1]) {
                  var currentLineObj = this.configuration.lines[indexLine];
                  this.configuration.lines.splice(indexLine, 1);
                  this.configuration.lines.splice(indexLine + 1, 0, currentLineObj);
                  //manage selected aciveLine
                  this.configuration.activeLine = indexLine + 2;
                }
              }
              //re-render formfield
              this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
              this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
            }
          },
            {

              key: 'addNewline',
              value: function addNewline() {
                var new_index = this.configuration.activeLine;
                this.$timeout(this.configuration.lines.splice(new_index, 0, initLineTemplate()),0);
                this.configuration.activeLine = new_index+1;
                //re-render formfield
                this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                this.toaster.pop({
                  type: 'success',
                  title: 'Success',
                  body: 'New Line successfully added',
                  showCloseButton: true
                });
              }
            },
            {
              key: 'addNewMatrix',
              value: function addNewMatrix() {

                var lineNum = this.numberOfRow;
                var colNum = this.numberOfColumn;
                this.rowReg = /^([1-9])|([1-4][0-9])|(50)$/;
                this.columnReg = /^[1-6]{1}$/;
                if ((lineNum > 0 && lineNum <= 50) && (colNum > 0 && colNum <= 6)){
                  var i = 0, j = 0;
                  var new_index = this.configuration.activeLine;
                  //this.configuration.lines.splice(new_index, 0, initLineTemplate());
                  for (i = 0; i < lineNum; i++){
                    if (i === 0){
                      this.$timeout(this.configuration.lines.splice(new_index, 0, initMatrixLineTemplate()),0);
                    } else{
                      this.$timeout(this.configuration.lines.splice(new_index, 0, initLineTemplate()),0);
                    }

                    new_index = new_index + 1;
                    var lineIndex = new_index - 1;
                    for (j = 0; j < colNum - 1; j++){
                      if (this.configuration.lines[lineIndex].columns.length < this.MaxNumberOfColumns) {
                        if (i === 0){
                          var newNumberOfColumns = this.configuration.lines[lineIndex].columns.push(angular.copy(initMatrixColumnTemplate()));
                        }else{
                          var newNumberOfColumns = this.configuration.lines[lineIndex].columns.push(angular.copy(initColumnTemplate()));
                        }
                        this.configuration.lines[lineIndex].columns[newNumberOfColumns - 1].numColumn = newNumberOfColumns;
                      }
                    }
                  }

                  this.configuration.activeLine = new_index;
                  //re-render formfield
                  this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                  this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                  this.toaster.pop({
                    type: 'success',
                    timeout: 2000,
                    title: 'Success',
                    body: 'New Matrix successfully added',
                    showCloseButton: true
                  });
                }
                else{
                  this.toaster.pop({
                    type: 'warning',
                    timeout: 2000,
                    title: 'Out of Range',
                    body: 'Please type the Row and Column again.',
                    showCloseButton: true
                  });
                }
                this.numberOfRow = "";
                this.numberOfColumn = "";
              }
            },
            {
              key: 'removeThisLine',
              value: function removeThisLine(index) {
                if (index > - 1) {
                  if (this.configuration.lines.length > 1) {
                    //manage selected aciveLine
                    if (this.configuration.activeLine === index + 1) this.configuration.activeLine = 1;
                    this.configuration.lines.splice(index, 1);
                    this.configuration.activeLine = this.configuration.lines.length;
                    this.toaster.pop({
                      type: 'success',
                      timeout: 3000,
                      title: 'Success',
                      body: 'Line No.' + (index + 1) + ' successfully removed',
                      showCloseButton: true
                    });
                  } else {
                    this.$timeout(function () {
                      this.toaster.pop({
                        type: 'warning',
                        title: 'Last line',
                        body: 'Can\'t delete the last line',
                        showCloseButton: true
                      });
                    }, 100);
                  }
                  //re-render formfield
                  this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                  this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                }
              }
            }, {
              key: 'increaseNumberOfColumns',
              value: function increaseNumberOfColumns() {
                var lineIndex = this.configuration.activeLine - 1;
                if (this.configuration.lines[lineIndex].columns.length < this.MaxNumberOfColumns) {

                  var newNumberOfColumns = this.configuration.lines[lineIndex].columns.push(angular.copy(initColumnTemplate()));
                  this.configuration.lines[lineIndex].columns[newNumberOfColumns - 1].numColumn = newNumberOfColumns;
                }
                //re-render formfield
                this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
              }
            }, {
              key: 'decreaseNumberOfColumns',
              value: function decreaseNumberOfColumns() {
                if (this.configuration.lines[this.configuration.activeLine - 1].columns.length > 1) {
                  this.configuration.lines[this.configuration.activeLine - 1].columns.splice(this.configuration.lines[this.configuration.activeLine - 1].columns.length - 1, 1);
                }
                //re-render formfield
                this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
              }
            }, {
              key: 'resetStepCounter',
              value: function resetStepCounter() {
                this.configuration.configStepCounter = 0;
              }
            }, {
              key: 'nextConfigStep',
              value: function nextConfigStep() {
                var configStepCounterMAX = this.configuration.listConfigStep.length - 1;
                if (this.configuration.configStepCounter !== configStepCounterMAX) {
                  this.configuration.configStepCounter++;
                }
                this.setTrueThisStepIndicator(this.configuration.configStepCounter);
              }
            }, {
              key: 'resetAllIndicators',
              value: function resetAllIndicators() {
                for (var i = this.configuration.stepIndicators.length - 1; i >= 0; i--) {
                  this.configuration.stepIndicators[i] = false;
                }
              }
            }, {
              key: 'setTrueThisStepIndicator',
              value: function setTrueThisStepIndicator(indexIndicator) {
                this.resetAllIndicators();
                this.configuration.stepIndicators[indexIndicator] = true;
              }
            }, {
              key: 'previousConfigStep',
              value: function previousConfigStep() {
                if (this.configuration.configStepCounter !== 0) {
                  this.configuration.configStepCounter--;
                }
                this.setTrueThisStepIndicator(this.configuration.configStepCounter);
              }
            }, {
              key: 'stepReachable',
              value: function stepReachable(indexStep) {
                if (indexStep < this.configuration.configStepCounter) {
                  return 'disabled';
                } else {
                  return 'enabled';
                }
              }
            }, {
              key: 'showModalAddCtrlToColumn',
              value: function showModalAddCtrlToColumn(size, indexLine, numcolumn) {
                var _this = this;
                var editControlModal = {};
                angular.extend(editControlModal, {
                  animation: this.animationsEnabled,
                  template: editControlModalTemplate,
                  controller: EDIT_MODAL_CONTROLLER_NAME,
                  controllerAs: EDIT_MODAL_CONTROLLERAS_NAME,
                  size: this.editControlModalSize,
                  backdrop: 'static',
                  resolve: {
                    nyaSelect: function nyaSelect() {
                      return _this.$modalProxy.getNyASelectFromSelectedLineColumn(_this.nyaSelect, _this.configuration, indexLine, numcolumn);
                    }
                  }
                });
                var modalInstance = this.$modal.open(editControlModal);
                modalInstance.result.then(function (modalAddCtrlModel) {
                  _this.$modalProxy.bindConfigurationModelFromModalReturn(indexLine, numcolumn, modalAddCtrlModel, _this.configuration);
                  _this.$formlyProxy.applyConfigurationToformlyModel(_this.configuration, _this.wfFormFields, _this.dataModel);
                  _this.wfFormFieldsOnlyNeededProperties = angular.copy(_this.wfFormFields);
                }, function () {
                });
                _this.configuration.activeLine = indexLine + 1;
              }
            }, {
              key: 'showAutoSaveModal',
              value: function showAutoSaveModal() {
                var _this = this;
                var data;
                var autoSaveModal = {};
                angular.extend(autoSaveModal, {
                  animation: true,
                  template: '<div class=\"modal-header\"><h4 class=\"modal-title\">Would you like to save your Form?</h4></div><div class=\"modal-body\"><label class=\"greyText\">Please enter the Form Name:</label><br><input type=\"text\" ng-model=\"vm.formName\"/><br></div><div class=\"modal-footer\"><button ng-disabled=\"vm.checkName()\" class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.save()\">Yes</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"vm.cancel()\">No</button></div>',
                  controller: ['$scope', 'editFormName', '$modalInstance', function($scope, editFormName, $modalInstance){
                    _this.modalOpenFlag = true;
                    this.formName = _this.configuration.formName;
                    this.save = function(){
                      $modalInstance.close(this.formName);
                      _this.counter = _this.counter + 1;
                    };
                    this.cancel = function(){
                      $modalInstance.dismiss('cancel');
                      _this.counter = _this.counter + 1;
                    }
                    this.checkName = function(){
                      if (this.formName == '' || this.formName == undefined){
                        return true;
                      } else{
                        return false;
                      }
                    };
                  }],
                  controllerAs: 'vm',
                  backdrop: 'static',
                  resolve: {
                    editFormName: function () {
                      return data;
                    }
                  }
                });
                var modalInstance = this.$modal.open(autoSaveModal);
                modalInstance.result.then(function (formName) {
                  _this.configuration.formName = formName;
                  _this.edaAutoSaveFlag = true;
                }, function () {
                  console.log('modalInstance Cancelled');
                });
              }
            }, {
              key: 'previewExistingform',
              value: function previewExistingform(formlyform) {
                var configlines = JSON.parse(formlyform.formlyField);
                //here to replace with $scope.configuration : initialise configuration with lines
                this.configurationLoaded = {};
                this.$formlyProxy.bindConfigurationLines(this.configurationLoaded, configlines);
                this.$formlyProxy.applyConfigurationToformlyModel(this.configurationLoaded, this.previewLoadedForm.fieldsModel, this.dataModel);
                this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                this.previewLoadedForm.cancelButtonText = formlyform.cancelButtonText;
                this.previewLoadedForm.submitButtonText = formlyform.submitButtonText;
              }
            }, {
              key: 'saveThisForm',
              value: function saveThisForm(action, ev) {
                this.qAction = action;
                this.qEvent = ev;
                if (typeof this.configuration.formName === 'undefined') {
                  this.toaster.pop({
                    type: 'warning',
                    timeout: 2000,
                    title: 'Form name is undefined',
                    body: 'Form has not been saved.',
                    showCloseButton: true
                  });
                  return false;
                }
                if (this.configuration.formName === '') {
                  this.toaster.pop({
                    type: 'warning',
                    timeout: 2000,
                    title: 'Form name is required',
                    body: 'Form has not been saved.',
                    showCloseButton: true
                  });
                  return false;
                }
                this.toaster.pop({
                  type: 'success',
                  timeout: 3000,
                  title: 'Success',
                  body: 'Form is being saved',
                  showCloseButton: true
                });
                this.toaster.clear();
                this.returnSaveEvent = true;
                return true;
              }
            }, {
              key: 'breadcrumb',
              value: function breadcrumb() {
                var _this = this;
                var data;
                var autoSaveModal = {};
                angular.extend(autoSaveModal, {
                  animation: true,
                  template: '<div class=\"modal-header\"><h4 class=\"modal-title\">Do you want to save data before exiting from this page?</h4></div><div class=\"modal-body\"><label class=\"greyText\">Please enter the Form Name:</label><br><input type=\"text\" ng-model=\"vm.formName\"/><br></div><div class=\"modal-footer\"><button ng-disabled=\"vm.checkName()\" class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.save()\">Yes</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"vm.cancel()\">No</button></div>',
                  controller: ['$scope', 'editFormName', '$modalInstance', '$location', '$route', function($scope, editFormName, $modalInstance, $location, $route){

                    this.formName = _this.configuration.formName;
                    this.save = function(){
                      $modalInstance.close(this.formName);
                      _this.counter = - 1;
                    };
                    this.cancel = function(){
                      $modalInstance.dismiss('cancel');
                      _this.counter = - 1;
                      $location.path('/admin/q/back');
                      $route.reload();
                    }
                    this.checkName = function(){
                      if (this.formName === '' || this.formName === undefined){
                        return true;
                      } else{
                        return false;
                      }
                    };
                  }],
                  controllerAs: 'vm',
                  backdrop: 'static',
                  resolve: {
                    editFormName: function () {
                      return data;
                    }
                  }
                });
                var modalInstance = this.$modal.open(autoSaveModal);
                modalInstance.result.then(function (formName) {
                  _this.configuration.formName = formName;
                  _this.saveThisForm('exit', '');
                  //return true;
                }, function () {
                  console.log('modalInstance Cancelled');
                });
              }
            }]);
          return edaStepWayEasyFormGenController;
        })();
        toInject = ['easyFormGenVersion', '$filter', 'toaster', '$timeout', '$modal', '$log', '$formlyProxy', '$modalProxy', 'easyFormSteWayConfig'];
        edaStepWayEasyFormGenController.$inject = toInject;
        _export('default', edaStepWayEasyFormGenController);
        _export('STEP_WAY_MAIN_CONTROLLER_NAME', STEP_WAY_MAIN_CONTROLLER_NAME);
        _export('STEP_WAY_MAIN_CONTROLLERAS_NAME', STEP_WAY_MAIN_CONTROLLERAS_NAME);
      }
    };
  });
  $__System.register('17', ['10', '13'], function (_export) {
    'use strict';
    var easyformTemplate, edaStepWayEasyFormGenController, STEP_WAY_MAIN_CONTROLLER_NAME, STEP_WAY_MAIN_CONTROLLERAS_NAME, STEP_WAY_DIRECTIVE_NAME;
    function edaStepWayEasyFormGenDirective($templateCache, $timeout, $formlyProxy, $modalProxy, $rootScope) {
      var directive = {
        restrict: 'E',
        scope: {
          edaEasyFormGeneratorModel: '=',
          hideButtonFlag:'=',
          edaSaveFormEvent: '&edaSaveFormEvent',
          edaAutoSaveEvent: '&edaAutoSaveEvent'
        },
        controller: STEP_WAY_MAIN_CONTROLLER_NAME,
        controllerAs: STEP_WAY_MAIN_CONTROLLERAS_NAME,
        replace: false,
        template: easyformTemplate,
        link: linkFct
      };
      return directive;
      function linkFct(scope, element, attrs) {
        scope.baselines = [];
        scope.vm.loadingPagination = {maxIndex:1, pageIndex:1, show:false, pageIndexPreview:1};
        scope.vm.hideButton = function(){
          if (typeof scope.hideButtonFlag === 'undefined') { return false; }
          else{ return true; }
        };
        $rootScope.edaStepRunning = true;
        scope.pageBreak = [];
        var timer = function() {
          if (scope.vm.counter > 0 && $rootScope.edaStepRunning === true){
            scope.vm.showAutoSaveModal();
          }
        };
        $timeout(timer, 1800000);
        scope.$watch(function () {
          return scope.vm.counter;
        }, function (newValue, oldValue) {
          if (newValue > oldValue && newValue > 0 && newValue < 48) {
            $timeout(timer, 1800000);
          }
        });
        //watch "scope.easyFormGeneratorModel"
        scope.$watch(function () {
          return scope.edaEasyFormGeneratorModel;
        }, function (newValue, oldValue) {
          loadExistingConfigurationModel();
        }, true);
        //watch "scope.vm.returnSaveEvent"" = catch saving form event
        scope.$watch(function () {
          return scope.vm.returnSaveEvent;
        }, function (newValue, oldValue) {
          if (newValue === true) {
            /****************** concat all the lines together before save **************/
            scope.totalLines = [];
            scope.previousLines = [];
            scope.nextLines = [];
            if(scope.vm.loadingPagination.maxIndex===1){
              /***** try to do page break by track the section controls ******/
              for(var i=0; i < scope.totalLines.length; i++){
                if(scope.totalLines[i].columns[0].control.selectedControl === 'page'){
                  scope.pageBreak.push(i);
                }
              }
              scope.pageBreak.push(scope.totalLines.length);
              console.log(scope.pageBreak);
              scope.vm.loadingPagination.maxIndex = scope.pageBreak.length;
              /***************************************************************/
            }
            if(!scope.baseLines){
              console.log(scope.vm.configuration.lines);
              scope.baseLines = scope.vm.configuration.lines;
            }
            //console.log(scope.baseLines);
            if( scope.vm.loadingPagination.pageIndex!==1){
              scope.previousLines = scope.vm.sliceQ(scope.baseLines, 0, scope.pageBreak[scope.vm.loadingPagination.pageIndex-2]);
            }
            scope.currentLines = scope.vm.configuration.lines;
            if(scope.vm.loadingPagination.maxIndex !== 1){
              scope.nextLines = scope.vm.sliceQ(scope.baseLines, scope.pageBreak[scope.vm.loadingPagination.pageIndex-1], scope.pageBreak[scope.vm.loadingPagination.maxIndex-1]);
            }
            if(scope.previousLines !== null){
              scope.totalLines = scope.totalLines.concat(scope.previousLines);
            }
            scope.totalLines = scope.totalLines.concat(scope.currentLines);
            if(scope.previousLines !== null){
              scope.totalLines = scope.totalLines.concat(scope.nextLines);
            }
            /***************************************************************************/
            var _easyFormGeneratorModel = {
              formName: scope.vm.configuration.formName,
              btnSubmitText: scope.vm.configuration.submitButtonText,
              btnCancelText: scope.vm.configuration.cancelButtonText,
              edaFieldsModel: scope.totalLines,
              //edaFieldsModelStringified: angular.toJson(scope.vm.configuration.lines),
              //formlyFieldsModel: scope.vm.wfFormFieldsOnlyNeededProperties,
              dataModel: scope.vm.dataModel,
              action: scope.vm.qAction,
              ev:scope.vm.qEvent
            };
            scope.edaSaveFormEvent({edaEasyFormGeneratorModel: _easyFormGeneratorModel});
            //back to false, waiting next save event
            scope.vm.returnSaveEvent = false;
          }
        });
        scope.$watch(function () {
          return scope.vm.edaAutoSaveFlag;
        }, function (newValue, oldValue) {
          if (newValue === true) {
            /****************** concat all the lines together before save **************/
            scope.totalLines = [];
            scope.previousLines = [];
            scope.nextLines = [];
            if(scope.vm.loadingPagination.maxIndex===1){
              /***** try to do page break by track the section controls ******/
              for(var i=0; i < scope.totalLines.length; i++){
                if(scope.totalLines[i].columns[0].control.selectedControl === 'page'){
                  scope.pageBreak.push(i);
                }
              }
              scope.pageBreak.push(scope.totalLines.length);
              console.log(scope.pageBreak);
              scope.vm.loadingPagination.maxIndex = scope.pageBreak.length;
              /***************************************************************/
            }
            if(!scope.baseLines){
              console.log(scope.vm.configuration.lines);
              scope.baseLines = scope.vm.configuration.lines;
            }
            //console.log(scope.baseLines);
            if( scope.vm.loadingPagination.pageIndex!==1){
              scope.previousLines = scope.vm.sliceQ(scope.baseLines, 0, scope.pageBreak[scope.vm.loadingPagination.pageIndex-2]);
            }
            scope.currentLines = scope.vm.configuration.lines;
            if(scope.vm.loadingPagination.maxIndex !== 1){
              scope.nextLines = scope.vm.sliceQ(scope.baseLines, scope.pageBreak[scope.vm.loadingPagination.pageIndex-1], scope.pageBreak[scope.vm.loadingPagination.maxIndex-1]);
            }
            if(scope.previousLines !== null){
              scope.totalLines = scope.totalLines.concat(scope.previousLines);
            }
            scope.totalLines = scope.totalLines.concat(scope.currentLines);
            if(scope.previousLines !== null){
              scope.totalLines = scope.totalLines.concat(scope.nextLines);
            }
            /***************************************************************************/
            var _easyFormGeneratorModel = {
              formName: scope.vm.configuration.formName,
              btnSubmitText: scope.vm.configuration.submitButtonText,
              btnCancelText: scope.vm.configuration.cancelButtonText,
              edaFieldsModel: scope.totalLines,
              //edaFieldsModelStringified: angular.toJson(scope.vm.configuration.lines),
              //formlyFieldsModel: scope.vm.wfFormFieldsOnlyNeededProperties,
              dataModel: scope.vm.dataModel,
              action: scope.vm.qAction,
              ev:scope.vm.qEvent
            };
            scope.edaAutoSaveEvent({edaEasyFormGeneratorModel: _easyFormGeneratorModel});
            //back to false, waiting next save event
            scope.vm.edaAutoSaveFlag = false;
          }
        });
        function loadExistingConfigurationModel() {
          if (angular.isDefined(scope.edaEasyFormGeneratorModel)) {
            var configlines = returnAttributeConfigurationLinesIfNotEmpty();
            scope.baseLines = configlines;
            /********** Try to break the configuration.lines ****/
            scope.vm.setupPagination(configlines);
            configlines = scope.currentLines;
            /*********************************************/
            console.log(configlines);
            scope.configurationLoaded = {};
            $formlyProxy.bindConfigurationLines(scope.configurationLoaded, configlines);

            /**
             * rebind special control properties :
             *
             * formly expression properties
             * Validators
             * Validation
             */
            $modalProxy.refreshControlFormlyExpressionProperties(scope.configurationLoaded);
            $modalProxy.refreshControlFormlyValidators(scope.configurationLoaded);
            $modalProxy.refreshControlFormlyValidation(scope.configurationLoaded);
            //apply configuration model
            scope.vm.configuration = angular.copy(scope.configurationLoaded);

            //setup the activeline to the last one
            if(scope.vm.configuration != null){
              scope.vm.configuration.activeLine = configlines.length;
            }
            //apply formly model
            $formlyProxy.applyConfigurationToformlyModel(scope.configurationLoaded, scope.vm.wfFormFields, scope.vm.model);
            scope.vm.wfFormFieldsOnlyNeededProperties = angular.copy(scope.vm.wfFormFields);

            /********** trim the page break if load the last page first time  ****/
            scope.vm.wfFormFields.splice(0, 1);
            /*********************************************/

            scope.vm.dataModel = returnAttributeDataModelIfNotEmpty();
            scope.vm.configuration.formName = angular.isString(scope.edaEasyFormGeneratorModel.formName) ? scope.edaEasyFormGeneratorModel.formName : '';
            scope.vm.configuration.submitButtonText = angular.isString(scope.edaEasyFormGeneratorModel.btnSubmitText) ? scope.edaEasyFormGeneratorModel.btnSubmitText : 'Validate';
            scope.vm.configuration.cancelButtonText = angular.isString(scope.edaEasyFormGeneratorModel.btnCancelText) ? scope.edaEasyFormGeneratorModel.btnCancelText : 'Cancel';
          }
        }


        /******************************************** paginnation code for setup ********************************************************/

        /* slice Form fieldModel*/
        scope.vm.sliceQ = function (fieldModel, start, end){
          var fieldModel = fieldModel;
          console.log(start + ' and ' + (end-1) );
          return fieldModel.slice(start, end);
        };

        /* concat the json, which is the dataModel of different pages */
        scope.vm.jsonConcat = function jsonConcat(json1, json2){
          function concat(o1, o2) {
            for (var key in o2) {
              o1[key] = o2[key];
            }
            return o1;
          }
          var output = {};
          output = concat(output, json1);
          output = concat(output, json2);
          return output;
        };
        /* load the pages fieldModel */
        scope.vm.loadPage = function (index){

          scope.vm.loadingPagination.pageIndex = index;
          scope.vm.loadingPagination.pageIndexPreview = index;
          scope.configurationLoaded = {};
          $formlyProxy.bindConfigurationLines(scope.configurationLoaded, scope.currentLines);

          /**
           * rebind special control properties :
           *
           * formly expression properties
           * Validators
           * Validation
           */
          $modalProxy.refreshControlFormlyExpressionProperties(scope.configurationLoaded);
          $modalProxy.refreshControlFormlyValidators(scope.configurationLoaded);
          $modalProxy.refreshControlFormlyValidation(scope.configurationLoaded);
          //apply configuration model
          scope.vm.configuration = angular.copy(scope.configurationLoaded);
          console.log(scope.vm.configuration);
          //setup the activeline to the last one
          if(scope.vm.configuration != null){
            scope.vm.configuration.activeLine = scope.currentLines.length;
          }
          //apply formly model
          $formlyProxy.applyConfigurationToformlyModel(scope.configurationLoaded, scope.vm.wfFormFields, scope.vm.model);

          scope.vm.wfFormFieldsOnlyNeededProperties = angular.copy(scope.vm.wfFormFields);
          scope.vm.dataModel = returnAttributeDataModelIfNotEmpty();
          scope.vm.configuration.formName = angular.isString(scope.edaEasyFormGeneratorModel.formName) ? scope.edaEasyFormGeneratorModel.formName : '';
          if(index !== 1){
            scope.vm.wfFormFields.splice(0, 1);
            console.log(scope.vm.wfFormFields);
          }
        };

        /* to be called by pagination */
        scope.vm.switchPage = function (index){

          if(index !== scope.vm.loadingPagination.pageIndex && index <= scope.vm.loadingPagination.maxIndex && index > 0){
            scope.totalLines = [];
            scope.previousLines = [];
            scope.nextLines = [];
            if( scope.vm.loadingPagination.pageIndex !== 1){
              scope.previousLines = scope.vm.sliceQ(scope.baseLines, 0, scope.pageBreak[scope.vm.loadingPagination.pageIndex-2]);
            }
            scope.currentLines = scope.vm.configuration.lines;
            if( scope.vm.loadingPagination.pageIndex !== scope.vm.loadingPagination.maxIndex){
              scope.nextLines = scope.vm.sliceQ(scope.baseLines, scope.pageBreak[scope.vm.loadingPagination.pageIndex-1], scope.pageBreak[scope.vm.loadingPagination.maxIndex-1]);
            }
            if(scope.previousLines !== null){
              scope.totalLines = scope.totalLines.concat(scope.previousLines);
            }
            scope.totalLines = scope.totalLines.concat(scope.currentLines);
            if(scope.previousLines !== null){
              scope.totalLines = scope.totalLines.concat(scope.nextLines);
            }
            console.log(scope.totalLines);
            /***** try to do page break by track the section controls ******/
            scope.pageBreak = [];
            for(var i=0; i < scope.totalLines.length; i++){
              if(scope.totalLines[i].columns[0].control.selectedControl === 'page'){
                scope.pageBreak.push(i);
              }
            }
            scope.pageBreak.push(scope.totalLines.length);
            console.log(scope.pageBreak);
            scope.vm.loadingPagination.maxIndex = scope.pageBreak.length;
            /***************************************************************/
            scope.baseLines = scope.totalLines;
            if(scope.vm.loadingPagination.maxIndex === 1){
              scope.vm.loadingPagination.show = false;
            } else {
              scope.vm.loadingPagination.show = true;
              if(index === 1){
                scope.currentLines = scope.vm.sliceQ(scope.baseLines, 0, scope.pageBreak[0]);
              }else{
                scope.currentLines = scope.vm.sliceQ(scope.baseLines, scope.pageBreak[index-2], scope.pageBreak[index-1]);
              }
            }

            scope.vm.loadPage(index);
          } else {
            scope.vm.toaster.warning('Page number is invalid.', 'Cancelled');
          }

        };

        /* first time to calculate the maxIndex and do the first page slice */
        scope.vm.setupPagination = function (configlines){

          scope.vm.loadingPagination.pageIndexPreview = 1;
          /***** try to do page break by track the section controls ******/
          scope.pageBreak = [];
          for(var i=0; i < scope.baseLines.length; i++){
            if(scope.baseLines[i].columns[0].control.selectedControl === 'page'){
              scope.pageBreak.push(i);
            }
          }
          scope.pageBreak.push(scope.baseLines.length);
          console.log(scope.pageBreak);
          scope.vm.loadingPagination.maxIndex = scope.pageBreak.length;
          /***************************************************************/
          if(scope.vm.loadingPagination.maxIndex === 1){
            scope.vm.loadingPagination.show = false;
            scope.currentLines = scope.baseLines;
          } else {
            scope.vm.loadingPagination.show = true;
            scope.vm.loadingPagination.pageIndex = scope.vm.loadingPagination.maxIndex;
            scope.vm.loadingPagination.pageIndexPreview = scope.vm.loadingPagination.maxIndex;
            //scope.currentLines = scope.vm.sliceQ(scope.baseLines, 0, scope.pageBreak[0]);
            scope.currentLines = scope.vm.sliceQ(scope.baseLines, scope.pageBreak[scope.vm.loadingPagination.maxIndex-2], scope.pageBreak[scope.vm.loadingPagination.maxIndex-1]);
          }
        };


        /******************************************************************************************************************/



        /*************************************** paginnation code for preview ***********************************************/
        scope.vm.switchPagePreview = function (index){
          //scope.vm.loadingPagination.pageIndexPreview = index;
          scope.vm.switchPage(index);
          scope.vm.configuration.configStepCounter = 1;
          scope.vm.resetAllIndicators();
          scope.vm.configuration.stepIndicators[1] = true;

        };
        /******************************************************************************************************************/

        function returnAttributeConfigurationLinesIfNotEmpty() {
          var edaEasyFormGeneratorModelToReturn = angular.isArray(scope.edaEasyFormGeneratorModel.edaFieldsModel) ? scope.edaEasyFormGeneratorModel.edaFieldsModel.length > 0 ? scope.edaEasyFormGeneratorModel.edaFieldsModel : emptyEdaFieldsModel() : emptyEdaFieldsModel();
          return edaEasyFormGeneratorModelToReturn;
        }

        function returnAttributeDataModelIfNotEmpty() {
          var dataModelToReturn = angular.isArray(scope.edaEasyFormGeneratorModel.dataModel) ? scope.edaEasyFormGeneratorModel.dataModel.length > 0 ? scope.edaEasyFormGeneratorModel.dataModel : {} : {};
          return dataModelToReturn;
        }

        /**
         * empty fields model : to display at least an empty line
         * otherwise would look like ugly empty line like it were a bug
         */
        function emptyEdaFieldsModel() {
          var emptyModel = [{
            "line": 1,
            "activeColumn": 1,
            "columns": [{
              "numColumn": 1,
              "exist": true,
              "control": {
                "type": "none",
                "key": "none"
              }
            }]
          }];
          return emptyModel;
        }
      }
    }

    return {
      setters: [function (_) {
        easyformTemplate = _['default'];
      }, function (_2) {
        edaStepWayEasyFormGenController = _2['default'];
        STEP_WAY_MAIN_CONTROLLER_NAME = _2.STEP_WAY_MAIN_CONTROLLER_NAME;
        STEP_WAY_MAIN_CONTROLLERAS_NAME = _2.STEP_WAY_MAIN_CONTROLLERAS_NAME;
      }],
      execute: function () {
        STEP_WAY_DIRECTIVE_NAME = 'edaStepWayEasyFormGen';
        edaStepWayEasyFormGenDirective.$inject = ['$templateCache', '$timeout', '$formlyProxy', '$modalProxy', '$rootScope'];
        _export('default', edaStepWayEasyFormGenDirective);
        _export('STEP_WAY_DIRECTIVE_NAME', STEP_WAY_DIRECTIVE_NAME);
      }
    };
  });
  $__System.register('18', [], function (_export) {
    /* global angular */
    'use strict';
    var EASY_FORM_STEP_WAY_CONFIG_NAME;
    function easyFormSteWayConfig($translateProvider) {
      var _configuration = defaultConfig();
      var _controlsList = controlsList();
      var _defaultLanguage = getDefaultLanguage();
      var _currentLanguage = initDefaultLanguage();
      var _showPreviewPanel = getDefaultshowPreviewPanel();
      var _showPreviewModels = getDefaultShowPreviewModel();
      /* jshint validthis:true */
      this.$get = easyFormStepWayConfigGET;
      this.setModalAnimation = setModalAnimation;
      this.getModalAnimation = getModalAnimation;
      this.configuration = _configuration;
      this.getEnabledControls = getEnabledControls;
      this.disableControl = disableControl;
      this.enableControl = enableControl;
      this.setLanguage = setLanguage;
      this.getCurrentLanguage = getCurrentLanguage;
      this.showPreviewPanel = showPreviewPanel;
      this.showPreviewModels = showPreviewModels;
      //set default config
      function defaultConfig() {
        var _defaultConfiguration = {
          modalAnimated: false
        };
        return _defaultConfiguration;
      }

      //show preview panel by default
      function getDefaultshowPreviewPanel() {
        return true;
      }

      //show preview data, fields models in preview panel
      function getDefaultShowPreviewModel() {
        return true;
      }

      function getCurrentLanguage() {
        return _currentLanguage;
      }

      //list of controls
      function controlsList() {
        var controls = [{ name: 'empty', enabled: true }, { name: 'page', enabled: true }, { name: 'Header', enabled: true }, { name: 'Subtitle', enabled: true }, { name: 'Subsection', enabled: true }, { name: 'Label', enabled: true }, { name: 'TextInput', enabled: true }, { name: 'Password', enabled: true }, { name: 'Email', enabled: true }, { name: 'Number', enabled: true }, { name: 'IPAddress', enabled: true }, { name: 'Date', enabled: true }, { name: 'BasicSelect', enabled: true }, { name: 'Texarea', enabled: true }, { name: 'RichTextEditor', enabled: false }, { name: 'Radio', enabled: true }, { name: 'Checkbox', enabled: true }, { name: 'GroupedSelect', enabled: false }];
        return controls;
      }

      function showPreviewPanel(wantToShow) {
        if (angular.isDefined(wantToShow)) {
          if (wantToShow === true) _showPreviewPanel = true;
          if (wantToShow === false) _showPreviewPanel = false;
        }
      }

      function showPreviewModels(wantToShow) {
        if (angular.isDefined(wantToShow)) {
          if (wantToShow === true) _showPreviewModels = true;
          if (wantToShow === false) _showPreviewModels = false;
        }
      }

      //language : set default to english
      function getDefaultLanguage() {
        var lang = 'en';
        return lang;
      }

      function setDefaultLanguage() {
        _currentLanguage = _defaultLanguage;
        $translateProvider.preferredLanguage(_currentLanguage);
        return _currentLanguage;
      }

      function setLanguage(language) {
        if (angular.isString(language)) {
          _currentLanguage = language;
          $translateProvider.preferredLanguage(language);
        } else {
          setDefaultLanguage();
        }
      }

      function initDefaultLanguage() {
        $translateProvider.useSanitizeValueStrategy('escape'); //security : Enable escaping of HTML
        $translateProvider.fallbackLanguage(_defaultLanguage); //fallback language to default language
        $translateProvider.preferredLanguage(_defaultLanguage);
        return _defaultLanguage;
      }

      function getEnabledControls() {
        return _controlsList;
      }

      function disableControl(controlName) {
        if (angular.isString(controlName)) {
          angular.forEach(_controlsList, function (aControl) {
            if (aControl.name === controlName) aControl.enabled = false;
          });
        }
      }

      function enableControl(controlName) {
        if (angular.isString(controlName)) {
          angular.forEach(_controlsList, function (aControl) {
            if (aControl.name === controlName) aControl.enabled = true;
          });
        }
      }

      function setModalAnimation(flagConfig) {
        var valueToApply = flagConfig === true ? flagConfig : flagConfig === false ? flagConfig : _configuration.modalAnimated;
        _configuration.modalAnimated = valueToApply;
      }

      function getModalAnimation() {
        return _configuration.modalAnimated;
      }

      //$get implementation :
      easyFormStepWayConfigGET.$inject = ['$translate'];
      function easyFormStepWayConfigGET($translate) {

        var service = {
          setModalAnimation: setModalAnimationFct,
          getModalAnimationValue: getModalAnimationValue,
          getListEnabledControl: getListEnabledControl,
          setLanguage: switchLanguage,
          getCurrentLanguage: getCurrentLanguage,
          isPreviewPanelVisible: isPreviewPanelVisible,
          arePreviewModelsVisible: arePreviewModelsVisible
        };
        return service;
        function getModalAnimationValue() {
          return _configuration.modalAnimated;
        }

        function setModalAnimationFct(value) {
          setModalAnimation(value);
        }

        function getListEnabledControl() {
          return angular.copy(_controlsList);
        }

        function switchLanguage(language) {
          if (angular.isString(language)) {
            _currentLanguage = language;
            $translate.use(language);
          } else {
            setDefaultLanguage();
          }
        }

        function isPreviewPanelVisible() {
          return _showPreviewPanel;
        }

        function arePreviewModelsVisible() {
          return _showPreviewModels;
        }
      }
    }

    return {
      setters: [],
      execute: function () {
        EASY_FORM_STEP_WAY_CONFIG_NAME = 'easyFormSteWayConfig';
        easyFormSteWayConfig.$inject = ['$translateProvider'];
        _export('default', easyFormSteWayConfig);
        _export('EASY_FORM_STEP_WAY_CONFIG_NAME', EASY_FORM_STEP_WAY_CONFIG_NAME);
      }
    };
  });
  $__System.register('19', ['13', '17', '18'], function (_export) {
    /* global angular */
    'use strict';
    var edaStepWayEasyFormGenController, STEP_WAY_MAIN_CONTROLLER_NAME, edaStepWayEasyFormGenDirective, STEP_WAY_DIRECTIVE_NAME, easyFormSteWayConfig, EASY_FORM_STEP_WAY_CONFIG_NAME, STEP_WAY_MAIN_MODULE;
    return {
      setters: [function (_) {
        edaStepWayEasyFormGenController = _['default'];
        STEP_WAY_MAIN_CONTROLLER_NAME = _.STEP_WAY_MAIN_CONTROLLER_NAME;
      }, function (_2) {
        edaStepWayEasyFormGenDirective = _2['default'];
        STEP_WAY_DIRECTIVE_NAME = _2.STEP_WAY_DIRECTIVE_NAME;
      }, function (_3) {
        easyFormSteWayConfig = _3['default'];
        EASY_FORM_STEP_WAY_CONFIG_NAME = _3.EASY_FORM_STEP_WAY_CONFIG_NAME;
      }],
      execute: function () {
        STEP_WAY_MAIN_MODULE = 'easyFormStepwayMainModule';
        _export('default', angular.module(STEP_WAY_MAIN_MODULE, []).controller(STEP_WAY_MAIN_CONTROLLER_NAME, edaStepWayEasyFormGenController).directive(STEP_WAY_DIRECTIVE_NAME, edaStepWayEasyFormGenDirective).provider(EASY_FORM_STEP_WAY_CONFIG_NAME, easyFormSteWayConfig));
      }
    };
  });
  $__System.register('14', ['15', '16'], function (_export) {
    var _createClass, _classCallCheck, EDIT_MODAL_CONTROLLER_NAME, EDIT_MODAL_CONTROLLERAS_NAME, editControlModalController, toInject;
    return {
      setters: [function (_2) {
        _createClass = _2['default'];
      }, function (_3) {
        _classCallCheck = _3['default'];
      }],
      execute: function () {
        'use strict';
        EDIT_MODAL_CONTROLLER_NAME = 'editControlModalController';
        EDIT_MODAL_CONTROLLERAS_NAME = 'editControlModCtrl';
        editControlModalController = (function () {
          function editControlModalController($modalInstance, nyaSelect, toaster, selectOptionManage, $modalProxy) {
            _classCallCheck(this, editControlModalController);
            this.$modalInstance = $modalInstance;
            this.nyaSelect = nyaSelect;
            this.toaster = toaster;
            this.selectOptionManage = selectOptionManage;
            this.$modalProxy = $modalProxy;
            this.init();
          }

          _createClass(editControlModalController, [{
            key: 'init',
            value: function init() {
              var initOptionModel = { rows: [] };
              this.radioRowCollection = initOptionModel;
              this.newOptionRadio = { saisie: '' };
              this.basicSelectRowCollection = initOptionModel;
              this.newOptionBasicSelect = { saisie: '' };
              this.groupedSelectRowCollection = initOptionModel;
              this.newOptionGroupedSelect = { saisie: '' };
              this.GroupedSelectGroups = { list: [] };
              this.newGroupGroupedSelect = { saisie: '' };
              this.groupSelectGroupClick = { showList: false };
              this.demodt = {};
              this.dateOptions = this.dateOptionsInit();
              this.demodt.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
              this.nyaSelect.selectedControl = this.nyaSelect.temporyConfig.selectedControl;
              this.nyaSelectFiltered = {};
              this.modelNyaSelect = {};
              //init today date
              this.today();
              //init nyaSelect model depending selected control
              this.initNyaSelectConformingSelectedControl();
            }
          }, {
            key: 'initNyaSelectConformingSelectedControl',
            value: function initNyaSelectConformingSelectedControl() {
              //place nya-select to selection if not none :
              if (this.nyaSelect.selectedControl !== 'none') {
                for (var i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
                  if (this.nyaSelect.controls[i].id === this.nyaSelect.selectedControl) this.modelNyaSelect = this.nyaSelect.controls[i];
                }
                if (this.nyaSelect.selectedControl === 'BasicSelect') this.bindBasicSelectFromNYA();
                if (this.nyaSelect.selectedControl === 'GroupedSelect') this.bindGroupedSelectFromNYA();
                if (this.nyaSelect.selectedControl === 'Radio') this.bindRadioFromNYA();
              }
              this.initNyaSelectFiltered();
            }
          }, {
            key: 'initNyaSelectFiltered',
            value: function initNyaSelectFiltered() {
              var listCtrl = [].concat(this.$modalProxy.getFilteredNyaSelectObject());
              angular.extend(this.nyaSelectFiltered, {
                'controls': listCtrl,
                'selectedControl': this.nyaSelect.selectedControl,
                'temporyConfig': this.nyaSelect.temporyConfig
              });
            }
          }, {
            key: 'bindBasicSelectFromNYA',
            value: function bindBasicSelectFromNYA() {
              if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
                for (var i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
                  var newOption = {
                    'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
                    'order': i,
                    'group': ''
                  };
                  this.basicSelectRowCollection.rows.push(newOption);
                }
              }
            }
          }, {
            key: 'bindRadioFromNYA',
            value: function bindRadioFromNYA() {
              if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
                for (var i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
                  var newOption = {
                    'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
                    'order': i,
                    'group': ''
                  };
                  this.radioRowCollection.rows.push(newOption);
                }
              }
            }
          }, {
            key: 'bindGroupedSelectFromNYA',
            value: function bindGroupedSelectFromNYA() {
              if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
                for (var i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
                  var newOption = {
                    'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
                    'order': i,
                    'group': this.nyaSelect.temporyConfig.formlyOptions[i].group
                  };
                  this.groupedSelectRowCollection.rows.push(newOption);
                }
                var filteredgroup = _.uniq(_.pluck(this.groupedSelectRowCollection.rows, 'group'));
                angular.copy(filteredgroup, this.GroupedSelectGroups.list);
              }
            }
          }, {
            key: 'addNewOptionRadio',
            value: function addNewOptionRadio() {
              var result = this.selectOptionManage.addNewOptionRadio(this.radioRowCollection, this.newOptionRadio.saisie);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: '\'' + this.newOptionRadio.saisie + '\' cannot be added.',
                  showCloseButton: true
                });
              }
              this.newOptionRadio = { saisie: '' }; //reset input
            }
          }, {
            key: 'removeRadioRow',
            value: function removeRadioRow(index) {
              var result = this.selectOptionManage.removeOption(this.radioRowCollection, index);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: 'Delete was cancelled.',
                  showCloseButton: true
                });
              }
            }
          }, {
            key: 'upThisRadioRow',
            value: function upThisRadioRow(index) {
              var result = this.selectOptionManage.upthisOption(this.radioRowCollection, index);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: 'Operation cancelled.',
                  showCloseButton: true
                });
              }
            }
          }, {
            key: 'downThisRadioRow',
            value: function downThisRadioRow(index) {
              var result = this.selectOptionManage.downthisOption(this.radioRowCollection, index);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: 'Operation cancelled.',
                  showCloseButton: true
                });
              }
            }
          }, {
            key: 'addNewOptionBasicSelect',
            value: function addNewOptionBasicSelect() {
              var result = this.selectOptionManage.addNewOptionBasicSelect(this.basicSelectRowCollection, this.newOptionBasicSelect.saisie);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: '\'' + this.newOptionBasicSelect.saisie + '\' cannot be added.',
                  showCloseButton: true
                });
              }
              this.newOptionBasicSelect = { saisie: '' }; //reset input
            }
          }, {
            key: 'removeRow',
            value: function removeRow(index) {
              var result = this.selectOptionManage.removeOption(this.basicSelectRowCollection, index);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: 'Delete was cancelled.',
                  showCloseButton: true
                });
              }
            }
          }, {
            key: 'upThisRow',
            value: function upThisRow(index) {
              var result = this.selectOptionManage.upthisOption(this.basicSelectRowCollection, index);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: 'Operation cancelled.',
                  showCloseButton: true
                });
              }
            }
          }, {
            key: 'downThisRow',
            value: function downThisRow(index) {
              var result = this.selectOptionManage.downthisOption(this.basicSelectRowCollection, index);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: 'Operation cancelled.',
                  showCloseButton: true
                });
              }
            }
          }, {
            key: 'showGroupListToChoose',
            value: function showGroupListToChoose() {
              this.groupSelectGroupClick.showList = !this.groupSelectGroupClick.showList;
            }
          }, {
            key: 'addNewGroupToGroupedSelect',
            value: function addNewGroupToGroupedSelect() {
              if (this.newGroupGroupedSelect.saisie !== '') {
                for (var i = this.GroupedSelectGroups.list.length - 1; i >= 0; i--) {
                  if (this.GroupedSelectGroups.list[i] === this.newGroupGroupedSelect.saisie) {
                    this.toaster.pop({
                      type: 'warning',
                      timeout: 2000,
                      title: 'Group already exists',
                      body: 'No group added.',
                      showCloseButton: true
                    });
                  }
                }
                this.GroupedSelectGroups.list.push(this.newGroupGroupedSelect.saisie);
              } else {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: 'Not a valid group to add',
                  body: 'No group added.',
                  showCloseButton: true
                });
              }
              this.newGroupGroupedSelect.saisie = '';
            }
          }, {
            key: 'addNewOptionGroupedSelect',
            value: function addNewOptionGroupedSelect() {
              var result = this.selectOptionManage.addNewOptionGroupedSelect(this.groupedSelectRowCollection, this.newOptionGroupedSelect.saisie, '');
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: '\'' + this.newOptionGroupedSelect.saisie + '\' cannot be added.',
                  showCloseButton: true
                });
              }
              //bind nya : dont bind here $apply is not done fast enough
              //bindGroupedSelectToNya();
              //reset input
              this.newOptionGroupedSelect = { saisie: '' };
            }
          }, {
            key: 'removeGroupedSelectRow',
            value: function removeGroupedSelectRow(index) {
              var result = this.selectOptionManage.removeOption(this.groupedSelectRowCollection, index);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: 'Delete was cancelled.',
                  showCloseButton: true
                });
              }
            }
          }, {
            key: 'upThisGroupedSelectRow',
            value: function upThisGroupedSelectRow(index) {
              var result = this.selectOptionManage.upthisOption(this.groupedSelectRowCollection, index);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: 'Operation cancelled.',
                  showCloseButton: true
                });
              }
            }
          }, {
            key: 'downThisGroupedSelectRow',
            value: function downThisGroupedSelectRow(index) {
              var result = this.selectOptionManage.downthisOption(this.groupedSelectRowCollection, index);
              if (result.resultFlag === false) {
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: result.details,
                  body: 'Operation cancelled.',
                  showCloseButton: true
                });
              }
            }
          }, {
            key: 'today',
            value: function today() {
              this.demodt.dt = new Date();
            }
          }, {
            key: 'clear',
            value: function clear() {
              this.demodt.dt = null;
            }
          }, {
            key: 'open',
            value: function open($event) {
              $event.preventDefault();
              $event.stopPropagation();
              this.demodt.opened = true;
            }
          }, {
            key: 'dateOptionsInit',
            value: function dateOptionsInit() {
              return {
                formatYear: 'yy',
                startingDay: 1,
                showWeeks: true,
                initDate: null
              };
            }
          }, {
            key: 'selectThisControl',
            value: function selectThisControl(controlName) {
              this.nyaSelect.selectedControl = 'none';
              this.resetTemporyConfig();
              for (var i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
                if (this.nyaSelect.controls[i].id === controlName) this.nyaSelect.selectedControl = this.nyaSelect.controls[i].id;
              }
              if (this.nyaSelect.selectedControl === 'Date') this.initDatePicker();
            }
          }, {
            key: 'ok',
            value: function ok() {
              if (this.nyaSelect.temporyConfig.formlyQuestionKey === "" && this.nyaSelect.selectedControl !== 'empty' && this.nyaSelect.selectedControl !== 'page' && this.nyaSelect.selectedControl !== 'Header' && this.nyaSelect.selectedControl !== 'Subtitle' && this.nyaSelect.selectedControl !== 'Subsection' && this.nyaSelect.selectedControl !== 'Label'){
                this.toaster.pop({
                  type: 'warning',
                  timeout: 2000,
                  title: 'Control is not selected.',
                  body: 'Please enter the key of the Control.',
                  showCloseButton: true
                });
              }
              else{
                if (this.nyaSelect.selectedControl === 'BasicSelect') this.bindBasicSelectToNya();
                if (this.nyaSelect.selectedControl === 'GroupedSelect') this.bindGroupedSelectToNya();
                if (this.nyaSelect.selectedControl === 'Radio') this.bindRadioToNya();
                //save config to control
                this.$modalProxy.applyConfigToSelectedControl(this.nyaSelect);
                //return current model to parent controller :
                this.$modalInstance.close(this.nyaSelect);
              }
            }
          }, {
            key: 'cancel',
            value: function cancel() {
              this.$modalInstance.dismiss('cancel');
            }
          }, {
            key: 'bindBasicSelectToNya',
            value: function bindBasicSelectToNya() {
              var resetNyASelectOptions = [];
              this.nyaSelect.temporyConfig.formlyOptions = resetNyASelectOptions;
              if (this.basicSelectRowCollection.rows.length > 0) {
                for (var i = 0; i <= this.basicSelectRowCollection.rows.length - 1; i++) {
                  var newOption = {
                    'name': this.basicSelectRowCollection.rows[i].option,
                    'value': i,
                    'group': ''
                  };
                  this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
                }
              }
            }
          }, {
            key: 'bindGroupedSelectToNya',
            value: function bindGroupedSelectToNya() {
              this.nyaSelect.temporyConfig.formlyOptions = [];
              for (var i = 0; i <= this.groupedSelectRowCollection.rows.length - 1; i++) {
                var newOption = {
                  'name': this.groupedSelectRowCollection.rows[i].option,
                  'value': i,
                  'group': this.groupedSelectRowCollection.rows[i].group
                };
                this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
              }
            }
          }, {
            key: 'bindRadioToNya',
            value: function bindRadioToNya() {
              var resetNyASelectOptions = [];
              this.nyaSelect.temporyConfig.formlyOptions = resetNyASelectOptions;
              if (this.radioRowCollection.rows.length > 0) {
                for (var i = 0; i <= this.radioRowCollection.rows.length - 1; i++) {
                  var newOption = {
                    'name': this.radioRowCollection.rows[i].option,
                    'value': i,
                    'group': ''
                  };
                  this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
                }
              }
            }
          }, {
            key: 'initDatePicker',
            value: function initDatePicker() {
              this.nyaSelect.temporyConfig.datepickerPopup = this.demodt.formats[0];
            }
          }, {
            key: 'resetTemporyConfig',
            value: function resetTemporyConfig() {
              this.nyaSelectFiltered.temporyConfig = {
                formlyLabel: '',
                formlyRequired: false,
                formlyPlaceholder: '',
                formlyDesciption: '',
                formlyQuestionKey: '',
                formlyDefaultValue: '',
                formlyOptions: []
              };
            }
          }]);
          return editControlModalController;
        })();
        toInject = ['$modalInstance', 'nyaSelect', 'toaster', 'selectOptionManage', '$modalProxy'];
        editControlModalController.$inject = toInject;
        _export('default', editControlModalController);
        _export('EDIT_MODAL_CONTROLLER_NAME', EDIT_MODAL_CONTROLLER_NAME);
        _export('EDIT_MODAL_CONTROLLERAS_NAME', EDIT_MODAL_CONTROLLERAS_NAME);
      }
    };
  });
  $__System.register('1a', ['14'], function (_export) {
    /* global angular */
    'use strict';
    var editModalController, EDIT_MODAL_CONTROLLER_NAME, EDIT_CONTROLE_MODAL_NAME;
    return {
      setters: [function (_) {
        editModalController = _['default'];
        EDIT_MODAL_CONTROLLER_NAME = _.EDIT_MODAL_CONTROLLER_NAME;
      }],
      execute: function () {
        EDIT_CONTROLE_MODAL_NAME = 'editControlModalModule';
        _export('default', angular.module(EDIT_CONTROLE_MODAL_NAME, []).controller(EDIT_MODAL_CONTROLLER_NAME, editModalController));
      }
    };
  });
  $__System.register('1b', [], function (_export) {
    /* global angular */

    'use strict';
    var resetNyaSelect, getResetConfig, returnControlFromAddCtrlModalModel, validKeyUniqueness;
    return {
      setters: [],
      execute: function () {
        resetNyaSelect = function resetNyaSelect(nyaSelectObj) {

          var newNyaSelectObj = {
            controls: [{
              id: 'empty',
              name: 'no control',
              subtitle: 'no control',
              group: 'Blank',
              formlyType: 'blank',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {}
            }, {
              id: 'page',
              name: 'Page Break',
              subtitle: 'page',
              group: 'Blank',
              formlyType: 'page',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {}
            }, {
              id: 'Header',
              name: 'Header',
              subtitle: 'no control',
              group: 'Decoration',
              formlyType: 'header',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {}
            }, {
              id: 'Subtitle',
              name: 'Section',
              subtitle: 'no control',
              group: 'Decoration',
              formlyType: 'subTitle',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {}
            }, {
              id: 'Subsection',
              name: 'Subsection',
              subtitle: 'no control',
              group: 'Decoration',
              formlyType: 'subSection',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {}
            }, {
              id: 'Label',
              name: 'Label',
              subtitle: 'no control',
              group: 'Decoration',
              formlyType: 'label',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {}
            }, {
              id: 'TextInput',
              name: 'Text input',
              subtitle: 'Text input',
              group: 'input',
              formlyType: 'textinput',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyDefaultValue:'',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this Text input field is required';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                    return returnMsg;
                  }
                }
              }
            }, {
              id: 'Password',
              name: 'Password',
              subtitle: 'Password',
              group: 'input',
              formlyType: 'passwordField',
              formlySubtype: 'passwordField',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyDefaultValue:'',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this Password field is required';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                    return returnMsg;
                  }
                }
              }
            }, {
              id: 'Email',
              name: 'Email',
              subtitle: 'Email',
              group: 'input',
              formlyType: 'email',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyDefaultValue:'',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {
                emailShape: {
                  expression: function expression(viewValue, modelValue) {
                    var value = modelValue || viewValue;
                    return (/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z.]{2,8}$/.test(value)
                    );
                  },
                  message: '$viewValue + \' is not a valid email\.\t\''
                }
              },
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this Email field is required\.\t';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required\.\t' : defaultReturnMsg : defaultReturnMsg;
                    //check if validation is really dued to require validation
                    //and not another validation like emailShape validator
                    if (scope.to.required) return returnMsg;
                  }
                }
              }
            }, {
              id: 'Number',
              name: 'Number',
              subtitle: 'Number',
              group: 'input',
              formlyType: 'number',
              formlySubtype: 'number',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyDefaultValue:'',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {
                numberShape: {
                  expression: function expression(viewValue, modelValue, scope) {
                    var value = modelValue || viewValue;
                    return (/^-?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value)
                    );
                  },
                  message: '$viewValue + \' is not a valid number\.\t\''
                }
              },
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    var defaultReturnMsg = 'this Number field is required\.\t';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required\.\t' : defaultReturnMsg : defaultReturnMsg;
                    if (scope.to.required) return returnMsg;
                  }
                }
              }
            }, {
              id: 'IPAddress',
              name: 'IP Address',
              subtitle: 'IP Address',
              group: 'input',
              formlyType: 'ipAddress',
              formlySubtype: 'ipAddress',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyDefaultValue:'',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {
                ipAddressShape: {
                  expression: function expression(viewValue, modelValue, scope) {
                    var value = modelValue || viewValue;
                    return (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value)
                    );
                  },
                  message: '$viewValue + \' is not a valid IP Address\.\t\''
                }
              },
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this Email field is required\.\t';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required\.\t' : defaultReturnMsg : defaultReturnMsg;
                    //check if validation is really dued to require validation
                    //and not another validation like emailShape validator
                    if (scope.to.required) return returnMsg;
                  }
                }
              }
            }, {
              id: 'Date',
              name: 'Date',
              subtitle: 'Date',
              group: 'input',
              formlyType: 'datepicker',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              datepickerPopup: 'dd-MMMM-yyyy',
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this Date field is required';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                    return returnMsg;
                  }
                }
              }
            }, {
              id: 'Texarea',
              name: 'Textarea',
              subtitle: 'Textarea',
              group: 'Textarea',
              formlyType: 'textAreaField',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyDefaultValue:'',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this Textarea field is required';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                    return returnMsg;
                  }
                }
              }
            }, {
              id: 'RichTextEditor',
              name: 'RichTextEditor',
              subtitle: 'RichTextEditor',
              group: 'Textarea',
              formlyType: 'richEditor',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyDefaultValue:'',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this RichTextEditor field is required';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                    return returnMsg;
                  }
                }
              }
            }, {
              id: 'Radio',
              name: 'Radio',
              subtitle: 'Radio',
              options: [],
              group: 'Radio',
              formlyType: 'radio',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this Radio field is required';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                    return returnMsg;
                  }
                }
              }
            }, {
              id: 'Checkbox',
              name: 'Checkbox',
              subtitle: 'Checkbox',
              group: 'Checkbox',
              formlyType: 'checkbox',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this Checkbox field is required';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                    return returnMsg;
                  }
                }
              }
            }, {
              id: 'BasicSelect',
              name: 'Dropdown List',
              subtitle: 'Dropdown List',
              options: [],
              group: 'Select',
              formlyType: 'basicSelect',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this Basic select field is required';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                    return returnMsg;
                  }
                }
              }
            }, {
              id: 'GroupedSelect',
              name: 'Grouped Select',
              subtitle: 'Grouped Select',
              options: [],
              group: 'Select',
              formlyType: 'groupedSelect',
              formlySubtype: '',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyOptions: [],
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {
                messages: {
                  required: function required(viewValue, modelValue, scope) {
                    //return a required validation message :
                    //-> '<label as name> is required '
                    //-> or if not exists or empty just 'this field is required'
                    var defaultReturnMsg = 'this Grouped Select field is required';
                    var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                    return returnMsg;
                  }
                }
              }
            }],
            selectedControl: 'none',
            temporyConfig: {
              selectedControl: 'none',
              formlyLabel: '',
              formlyRequired: false,
              formlyDesciption: '',
              formlyQuestionKey: '',
              formlyDefaultValue:'',
              formlyPlaceholder: '',
              formlyOptions: [],
              //expressions/validation fields
              formlyExpressionProperties: {},
              formlyValidators: {},
              formlyValidation: {}
            }

          };
          //reset
          angular.copy(newNyaSelectObj, nyaSelectObj);
          return true;
        };
        getResetConfig = function getResetConfig() {
          var emptyConfig = {};
          angular.extend(emptyConfig, {
            formlyLabel: '',
            formlyRequired: false,
            formlyPlaceholder: '',
            formlyDesciption: '',
            formlyQuestionKey: '',
            formlyDefaultValue:'',
            formlyOptions: []
          });
          return emptyConfig;
        };
        /**
         * data passed back to parent controller
         * after control being finsihed editing in modal
         */

        returnControlFromAddCtrlModalModel = function returnControlFromAddCtrlModalModel(CtrlModalModel) {

          var modelToReturn = {
            selectedControl: 'none',
            formlyType: 'none',
            formlySubtype: 'none',
            formlyLabel: '',
            formlyRequired: false,
            formlyDesciption: '',
            formlyQuestionKey: '',
            formlyDefaultValue: '',
            formlyPlaceholder: '',
            formlyOptions: [],
            //validation fields
            formlyExpressionProperties: {},
            formlyValidators: {},
            formlyValidation: {}
          };
          for (var i = CtrlModalModel.controls.length - 1; i >= 0; i--) {
            if (CtrlModalModel.selectedControl === CtrlModalModel.controls[i].id) {
              modelToReturn.selectedControl = CtrlModalModel.selectedControl;
              modelToReturn.formlyType = CtrlModalModel.controls[i].formlyType;
              modelToReturn.formlySubtype = CtrlModalModel.controls[i].formlySubtype;
              modelToReturn.formlyLabel = CtrlModalModel.controls[i].formlyLabel;
              modelToReturn.formlyRequired = CtrlModalModel.controls[i].formlyRequired;
              modelToReturn.formlyDesciption = CtrlModalModel.controls[i].formlyDesciption;
              modelToReturn.formlyQuestionKey = CtrlModalModel.controls[i].formlyQuestionKey;
              modelToReturn.formlyDefaultValue = CtrlModalModel.controls[i].formlyDefaultValue;
              modelToReturn.formlyPlaceholder = CtrlModalModel.controls[i].formlyPlaceholder;
              modelToReturn.formlyOptions = CtrlModalModel.controls[i].formlyOptions;
              modelToReturn.formlyExpressionProperties = angular.copy(CtrlModalModel.controls[i].formlyExpressionProperties);
              modelToReturn.formlyValidators = angular.copy(CtrlModalModel.controls[i].formlyValidators);
              modelToReturn.formlyValidation = angular.copy(CtrlModalModel.controls[i].formlyValidation);
              //particular properties

              //
              if(CtrlModalModel.controls[i].formlyType === 'page'){
                modelToReturn.formlyPlaceholder = 'Page Break';
                modelToReturn.formlyLabel = 'Page Break';
                modelToReturn.formlyDesciption = 'Page Break';
              }
              //datetpicker format
              if (CtrlModalModel.controls[i].formlyType === 'datepicker') {
                modelToReturn.datepickerPopup = CtrlModalModel.controls[i].datepickerPopup;
              }
            }
          }
          return modelToReturn;
        };
        /**
         * validKeyUniqueness
         * to be sure the "keys" are unique (in same formly field model)
         */

        validKeyUniqueness = function validKeyUniqueness(thisKey, configurationObj) {
          var isUnique = true;
          //each lines
          for (var i = configurationObj.lines.length - 1; i >= 0; i--) {
            //each columns
            for (var j = configurationObj.lines[i].columns.length - 1; j >= 0; j--) {
              if (configurationObj.lines[i].columns[j].control.key === thisKey) {
                isUnique = false;
              }
            }
          }
          return isUnique;
        };
        _export('resetNyaSelect', resetNyaSelect);
        _export('returnControlFromAddCtrlModalModel', returnControlFromAddCtrlModalModel);
        _export('validKeyUniqueness', validKeyUniqueness);
        _export('getResetConfig', getResetConfig);
      }
    };
  });
  $__System.register('1c', ['15', '16', '1b'], function (_export) {
    var _createClass, _classCallCheck, resetNyaSelect, returnControlFromAddCtrlModalModel, validKeyUniqueness, getResetConfig, CONTROLLER_MODAL_PROXY_SERVICE, $modalProxy;
    return {
      setters: [function (_) {
        _createClass = _['default'];
      }, function (_2) {
        _classCallCheck = _2['default'];
      }, function (_b) {
        resetNyaSelect = _b.resetNyaSelect;
        returnControlFromAddCtrlModalModel = _b.returnControlFromAddCtrlModalModel;
        validKeyUniqueness = _b.validKeyUniqueness;
        getResetConfig = _b.getResetConfig;
      }],
      execute: function () {
        'use strict';
        CONTROLLER_MODAL_PROXY_SERVICE = '$modalProxy';
        $modalProxy = (function () {
          function $modalProxy(easyFormSteWayConfig) {
            _classCallCheck(this, $modalProxy);
            this.easyFormSteWayConfig = easyFormSteWayConfig;
          }

          _createClass($modalProxy, [{
            key: 'initNyaSelect',
            value: function initNyaSelect(nyaSelectObj) {
              return resetNyaSelect(nyaSelectObj);
            }
          }, {
            key: 'getControlsDefinition',
            value: function getControlsDefinition() {
              var controls = {};
              resetNyaSelect(controls);
              return controls;
            }
          }, {
            key: 'getNyASelectFromSelectedLineColumn',
            value: function getNyASelectFromSelectedLineColumn(nyaSelectObj, configurationObj, indexLine, numcolumn) {
              resetNyaSelect(nyaSelectObj);
              /**
               * data send to modal controller
               */
              if (typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions != 'undefined') {

                nyaSelectObj.temporyConfig.selectedControl = typeof configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl : 'none';
                nyaSelectObj.temporyConfig.formlyLabel = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label : '';
                nyaSelectObj.temporyConfig.formlyRequired = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required : '';
                nyaSelectObj.temporyConfig.formlyDesciption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description : '';
                nyaSelectObj.temporyConfig.formlyPlaceholder = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder : '';
                nyaSelectObj.temporyConfig.formlyOptions = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options : '';
                nyaSelectObj.temporyConfig.formlyQuestionKey = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.questionKey != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.questionKey : '';
                nyaSelectObj.temporyConfig.formlyDefaultValue = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyDefaultValue != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.formlyDefaultValue : '';
                nyaSelectObj.temporyConfig.formlyExpressionProperties = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties) : {};
                nyaSelectObj.temporyConfig.formlyValidators = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators) : {};
                nyaSelectObj.temporyConfig.formlyValidation = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation) : {};
                // particular case : datepicker
                if (nyaSelectObj.temporyConfig.selectedControl === 'Date') {
                  nyaSelectObj.temporyConfig.datepickerPopup = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerPopup != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerPopup : '';
                }
              }
              return nyaSelectObj;
            }
          }, {
            key: 'bindConfigurationModelFromModalReturn',
            value: function bindConfigurationModelFromModalReturn(indexLine, numcolumn, modalAddCtrlModel, configurationObj) {

              var extractedProps = returnControlFromAddCtrlModalModel(modalAddCtrlModel);
              configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl = extractedProps.selectedControl;
              configurationObj.lines[indexLine].columns[numcolumn].control.type = extractedProps.formlyType;
              configurationObj.lines[indexLine].columns[numcolumn].control.subtype = extractedProps.formlySubtype;
              //reset templateOptions
              configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions = {
                label: '',
                required: false,
                description: '',
                placeholder: '',
                options: []
              };
              //then bind templateOptions
              configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label = extractedProps.formlyLabel;
              configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required = extractedProps.formlyRequired;
              configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description = extractedProps.formlyDesciption;
              configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.questionKey = extractedProps.formlyQuestionKey;
              configurationObj.lines[indexLine].columns[numcolumn].control.formlyDefaultValue = extractedProps.formlyDefaultValue;
              configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder = extractedProps.formlyPlaceholder;
              configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options = extractedProps.formlyOptions;
              configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties = angular.copy(extractedProps.formlyExpressionProperties);
              configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators = angular.copy(extractedProps.formlyValidators);
              configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation = angular.copy(extractedProps.formlyValidation);
              //////////////////////////////////////////
              // add additionnal particular properties
              //////////////////////////////////////////
              //-> datepicker : datepickerPopup
              if (configurationObj.lines[indexLine].columns[numcolumn].control.type === 'datepicker') {
                configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerPopup = extractedProps.datepickerPopup;
              }
              /**
               * unique key (set only first time) in this model is formly control type + Date.now();
               */
              var newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();
              if (validKeyUniqueness(newKey, configurationObj) === true) {
                configurationObj.lines[indexLine].columns[numcolumn].control.key = newKey;
              } else {
                /**
                 * 2nd attempt
                 */
                newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();
                if (validKeyUniqueness(newKey, configurationObj) === true) {
                  configurationObj.lines[indexLine].columns[numcolumn].control.key = newKey;
                } else {
                  /**
                   * 3rd attempt
                   */
                  newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();
                }
              }
              configurationObj.lines[indexLine].columns[numcolumn].control.edited = true;
            }
          }, {
            key: 'applyConfigToSelectedControl',
            value: function applyConfigToSelectedControl(nyaSelectObj) {
              /**
               * used in modal (edit control)
               */
              for (var i = nyaSelectObj.controls.length - 1; i >= 0; i--) {
                if (nyaSelectObj.controls[i].id === nyaSelectObj.selectedControl) {

                  nyaSelectObj.controls[i].formlyLabel = nyaSelectObj.temporyConfig.formlyLabel;
                  nyaSelectObj.controls[i].formlyRequired = nyaSelectObj.temporyConfig.formlyRequired;
                  nyaSelectObj.controls[i].formlyDesciption = nyaSelectObj.temporyConfig.formlyDesciption;
                  nyaSelectObj.controls[i].formlyQuestionKey = nyaSelectObj.temporyConfig.formlyQuestionKey;
                  nyaSelectObj.controls[i].formlyDefaultValue = nyaSelectObj.temporyConfig.formlyDefaultValue;
                  nyaSelectObj.controls[i].formlyPlaceholder = nyaSelectObj.temporyConfig.formlyPlaceholder;
                  nyaSelectObj.controls[i].formlyOptions = nyaSelectObj.temporyConfig.formlyOptions;
                  if (nyaSelectObj.controls[i].id === 'Date') {
                    nyaSelectObj.controls[i].datepickerPopup = nyaSelectObj.temporyConfig.datepickerPopup;
                  }
                }
              }
            }
          }, {
            key: 'resetTemporyConfig',
            value: function resetTemporyConfig() {
              return getResetConfig();
            }

            /**
             * loading forms will not be able to retrieve formlyExpressionProperties
             * -> here does the job
             */
          }, {
            key: 'refreshControlFormlyExpressionProperties',
            value: function refreshControlFormlyExpressionProperties(configurationModel) {
              var _this = this;
              if (angular.isObject(configurationModel)) {
                //iterates lines
                angular.forEach(configurationModel.lines, function (line, indexLine) {
                  angular.forEach(line.columns, function (column, controlIndex) {
                    var _controlsDefinition = _this.getControlsDefinition();
                    angular.forEach(_controlsDefinition.controls, function (aControl, aControlIndex) {
                      if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
                        //----> update control formlyExpressionProperties property
                        column.control.formlyExpressionProperties = aControl.formlyExpressionProperties;
                      }
                    });
                  });
                });
              }
            }

            /**
             * loading forms will not be able to retrieve formlyValidators
             * -> here does the job
             */
          }, {
            key: 'refreshControlFormlyValidators',
            value: function refreshControlFormlyValidators(configurationModel) {
              var _this2 = this;
              if (angular.isObject(configurationModel)) {
                //iterates lines
                angular.forEach(configurationModel.lines, function (line, indexLine) {
                  angular.forEach(line.columns, function (column, controlIndex) {
                    var _controlsDefinition = _this2.getControlsDefinition();
                    angular.forEach(_controlsDefinition.controls, function (aControl, aControlIndex) {
                      if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
                        //----> update control formlyValidators property
                        column.control.formlyValidators = aControl.formlyValidators;
                      }
                    });
                  });
                });
              }
            }

            /**
             * loading forms will not be able to retrieve formlyValidation
             * -> here does the job
             */
          }, {
            key: 'refreshControlFormlyValidation',
            value: function refreshControlFormlyValidation(configurationModel) {
              var _this3 = this;
              if (angular.isObject(configurationModel)) {
                //iterates lines
                angular.forEach(configurationModel.lines, function (line, indexLine) {
                  angular.forEach(line.columns, function (column, controlIndex) {
                    var _controlsDefinition = _this3.getControlsDefinition();
                    angular.forEach(_controlsDefinition.controls, function (aControl, aControlIndex) {
                      if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
                        //----> update control formlyValidation property
                        column.control.formlyValidation = aControl.formlyValidation;
                      }
                    });
                  });
                });
              }
            }
          }, {
            key: 'filterDisabledControl',
            value: function filterDisabledControl(nyaSelectObj) {
              var listAllEnabledControl = this.easyFormSteWayConfig.getListEnabledControl();
              var filteredNyaList = [];
              angular.forEach(listAllEnabledControl, function (enabledControl) {
                angular.forEach(nyaSelectObj.controls, function (nyaControl) {
                  if (nyaControl.id === enabledControl.name && enabledControl.enabled === true) {
                    filteredNyaList = filteredNyaList.concat(nyaControl);
                  }
                });
              });
              return filteredNyaList;
            }
          }, {
            key: 'getFilteredNyaSelectObject',
            value: function getFilteredNyaSelectObject() {
              var newNyaSelectObj = {};
              resetNyaSelect(newNyaSelectObj);
              return angular.copy(this.filterDisabledControl(angular.copy(newNyaSelectObj)));
              //return angular.copy(angular.copy(newNyaSelectObj));
            }
          }]);
          return $modalProxy;
        })();
        $modalProxy.$inject = ['easyFormSteWayConfig'];
        _export('default', $modalProxy);
        _export('CONTROLLER_MODAL_PROXY_SERVICE', CONTROLLER_MODAL_PROXY_SERVICE);
      }
    };
  });
  $__System.register('1d', ['1c'], function (_export) {
    /* global angular */
    'use strict';
    var $modalProxy, CONTROLLER_MODAL_PROXY_SERVICE, MODAL_PROXY_MODULE_NAME;
    return {
      setters: [function (_c) {
        $modalProxy = _c['default'];
        CONTROLLER_MODAL_PROXY_SERVICE = _c.CONTROLLER_MODAL_PROXY_SERVICE;
      }],
      execute: function () {
        MODAL_PROXY_MODULE_NAME = 'modalProxyModule';
        _export('default', angular.module(MODAL_PROXY_MODULE_NAME, []).service(CONTROLLER_MODAL_PROXY_SERVICE, $modalProxy));
      }
    };
  });
  $__System.register('1e', [], function (_export) {
    /* global angular */

    'use strict';
    var configurationModelInit, configurationModelResult, isTemplateOptionDefined, extractTemplateOptionLabel, extractTemplateOptionDatepickerPopup, extractFormlyExpressionProperties, extractFormlyDefaultValue, extractFormlyValidators, extractFormlyValidation, extractTemplateOptionRequired, extractTemplateOptionOptions, extractTemplateOptionType, extractTemplateOptionPlaceholder, extractTemplateOptionDescription, addDatepickerPopupProperty, addOneColumnHeader, addOneColumnControl, addTwoColumnControl, addThreeColumnControl, addFourColumnControl, addFiveColumnControl, addSixColumnControl, resetDataModel, resetFormlyModel;
    return {
      setters: [],
      execute: function () {
        configurationModelInit = {
          activeLine: 1,
//				listConfigStep: ['init', 'first', 'second', 'third'],
//				stepIndicators: [true, false, false, false],
          listConfigStep: ['init', 'first'],
          stepIndicators: [true, false],
          configStepCounter: 0,
          submitButtonText: 'submit',
          cancelButtonText: 'cancel',
          lines: [{
            line: 1,
            activeColumn: 1,
            columns: [{
              numColumn: 1,
              exist: true,
              control: {
                type: 'none',
                key: 'none'
              }
            }]
          }]
        };
        // templateOptions: {
        //                     label: 'none',
        //                     placeholder: 'none',
        //                     required: false,
        //                     description: 'Descriptive text'
        //                   }
        configurationModelResult = {
          activeLine: 1,
//				listConfigStep: ['init', 'first', 'second', 'third'],
//				stepIndicators: [true, false, false, false],
          listConfigStep: ['init', 'first'],
          stepIndicators: [true, false],
          configStepCounter: 0,
          submitButtonText: 'submit',
          cancelButtonText: 'cancel',
          lines: []
        };
        isTemplateOptionDefined = function isTemplateOptionDefined(obj) {
          return typeof obj.templateOptions !== 'undefined' ? true : false;
        };
        extractTemplateOptionLabel = function extractTemplateOptionLabel(obj) {
          return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.label !== 'undefined' ? obj.templateOptions.label : '' : '';
        };
        extractTemplateOptionDatepickerPopup = function extractTemplateOptionDatepickerPopup(obj) {
          return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.datepickerPopup !== 'undefined' ? obj.templateOptions.datepickerPopup : '' : '';
        };
        extractFormlyExpressionProperties = function extractFormlyExpressionProperties(obj) {
          return typeof obj.formlyExpressionProperties !== 'undefined' ? angular.copy(obj.formlyExpressionProperties) : {};
        };
        extractFormlyDefaultValue = function extractFormlyDefaultValue(obj) {
          return typeof obj.formlyDefaultValue !== 'undefined' ? obj.formlyDefaultValue : '';
        };
        extractFormlyValidators = function extractFormlyValidators(obj) {
          return typeof obj.formlyValidators !== 'undefined' ? angular.copy(obj.formlyValidators) : {};
        };
        extractFormlyValidation = function extractFormlyValidation(obj) {
          return typeof obj.formlyValidation !== 'undefined' ? angular.copy(obj.formlyValidation) : {};
        };
        extractTemplateOptionRequired = function extractTemplateOptionRequired(obj) {
          return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.required !== 'undefined' ? obj.templateOptions.required : '' : '';
        };
        extractTemplateOptionOptions = function extractTemplateOptionOptions(obj) {
          return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.options !== 'undefined' ? obj.templateOptions.options : '' : '';
        };
        extractTemplateOptionType = function extractTemplateOptionType(obj) {
          return typeof obj.subtype !== 'undefined' ? obj.subtype : '';
        };
        extractTemplateOptionPlaceholder = function extractTemplateOptionPlaceholder(obj) {
          return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.placeholder !== 'undefined' ? obj.templateOptions.placeholder : '' : '';
        };
        extractTemplateOptionDescription = function extractTemplateOptionDescription(obj) {
          return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.description !== 'undefined' ? obj.templateOptions.description : '' : '';
        };
        addDatepickerPopupProperty = function addDatepickerPopupProperty(fieldToPush, configurationModel, lineIndex) {
          fieldToPush.templateOptions.datepickerPopup = extractTemplateOptionDatepickerPopup(configurationModel.lines[lineIndex].columns[0].control);
        };
        addOneColumnHeader = function addOneColumnHeader(formlyModel, configurationModel, lineIndex) {
          var headerTemplateCol0 = '<div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control) + '<h2></div></div><hr/>';
          formlyModel.push({
            template: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'header' ? headerTemplateCol0 : '<div></div>' : '<div></div>'
          });
        };
        addOneColumnControl = function addOneColumnControl(formlyModel, configurationModel, lineIndex) {
          var fieldToPush = {
            className: 'col-xs-12',
            type: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[0].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[0].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[0].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[0].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[0].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[0].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[0].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[0].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[0].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'datepicker') {
            addDatepickerPopupProperty(fieldToPush, configurationModel, lineIndex);
          }

          formlyModel.push(fieldToPush);
        };
        addTwoColumnControl = function addTwoColumnControl(formlyModel, configurationModel, lineIndex) {

          //text header is stored in "description" in templateOtion model
          var headerTemplateCol0 = {
            className: 'col-xs-6',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol1 = {
            className: 'col-xs-6',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control) + '<h2><hr/></div></div>'
          };
          var controlCol0 = {
            className: 'col-xs-6',
            type: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[0].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[0].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[0].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[0].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[0].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[0].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[0].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[0].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[0].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol0, configurationModel, lineIndex);
          }

          var controlCol1 = {
            className: 'col-xs-6',
            type: typeof configurationModel.lines[lineIndex].columns[1].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[1].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[1].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[1].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[1].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[1].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[1].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[1].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[1].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[1].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[1].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[1].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[1].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol1, configurationModel, lineIndex);
          }

          var FieldGroup = [];
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'header') {
            FieldGroup.push(headerTemplateCol0);
          } else {
            FieldGroup.push(controlCol0);
          }

          if (configurationModel.lines[lineIndex].columns[1].control.type === 'header') {
            FieldGroup.push(headerTemplateCol1);
          } else {
            FieldGroup.push(controlCol1);
          }

          formlyModel.push({
            className: 'row',
            fieldGroup: FieldGroup
          });
        };
        addThreeColumnControl = function addThreeColumnControl(formlyModel, configurationModel, lineIndex) {
          //text header is stored in "description" in templateOtion model
          var headerTemplateCol0 = {
            className: 'col-xs-4',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol1 = {
            className: 'col-xs-4',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol2 = {
            className: 'col-xs-4',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[2].control) + '<h2><hr/></div></div>'
          };
          var controlCol0 = {
            className: 'col-xs-4',
            type: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[0].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[0].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[0].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[0].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[0].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[0].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[0].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[0].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[0].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol0, configurationModel, lineIndex);
          }

          var controlCol1 = {
            className: 'col-xs-4',
            type: typeof configurationModel.lines[lineIndex].columns[1].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[1].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[1].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[1].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[1].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[1].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[1].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[1].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[1].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[1].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[1].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[1].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[1].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol1, configurationModel, lineIndex);
          }
          var controlCol2 = {
            className: 'col-xs-4',
            type: typeof configurationModel.lines[lineIndex].columns[2].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[2].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[2].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[2].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[2].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[2].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[2].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[2].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[2].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[2].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[2].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[2].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[2].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[2].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[2].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[2].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol2, configurationModel, lineIndex);
          }

          var FieldGroup = [];
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'header') {
            FieldGroup.push(headerTemplateCol0);
          } else {
            FieldGroup.push(controlCol0);
          }

          if (configurationModel.lines[lineIndex].columns[1].control.type === 'header') {
            FieldGroup.push(headerTemplateCol1);
          } else {
            FieldGroup.push(controlCol1);
          }

          if (configurationModel.lines[lineIndex].columns[2].control.type === 'header') {
            FieldGroup.push(headerTemplateCol2);
          } else {
            FieldGroup.push(controlCol2);
          }

          formlyModel.push({
            className: 'row',
            fieldGroup: FieldGroup
          });
        };
        addFourColumnControl = function addFourColumnControl(formlyModel, configurationModel, lineIndex) {
          //text header is stored in "description" in templateOtion model
          var headerTemplateCol0 = {
            className: 'col-xs-3',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol1 = {
            className: 'col-xs-3',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol2 = {
            className: 'col-xs-3',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[2].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol3 = {
            className: 'col-xs-3',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[3].control) + '<h2><hr/></div></div>'
          };
          var controlCol0 = {
            className: 'col-xs-3',
            type: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[0].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[0].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[0].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[0].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[0].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[0].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[0].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[0].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[0].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol0, configurationModel, lineIndex);
          }

          var controlCol1 = {
            className: 'col-xs-3',
            type: typeof configurationModel.lines[lineIndex].columns[1].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[1].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[1].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[1].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[1].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[1].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[1].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[1].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[1].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[1].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[1].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[1].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[1].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol1, configurationModel, lineIndex);
          }
          var controlCol2 = {
            className: 'col-xs-3',
            type: typeof configurationModel.lines[lineIndex].columns[2].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[2].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[2].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[2].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[2].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[2].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[2].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[2].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[2].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[2].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[2].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[2].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[2].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[2].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[2].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[2].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol2, configurationModel, lineIndex);
          }

          var controlCol3 = {
            className: 'col-xs-3',
            type: typeof configurationModel.lines[lineIndex].columns[3].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[3].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[3].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[3].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[3].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[3].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[3].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[3].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[3].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[3].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[3].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[3].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[3].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[3].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[3].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[3].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol3, configurationModel, lineIndex);
          }


          var FieldGroup = [];
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'header') {
            FieldGroup.push(headerTemplateCol0);
          } else {
            FieldGroup.push(controlCol0);
          }

          if (configurationModel.lines[lineIndex].columns[1].control.type === 'header') {
            FieldGroup.push(headerTemplateCol1);
          } else {
            FieldGroup.push(controlCol1);
          }

          if (configurationModel.lines[lineIndex].columns[2].control.type === 'header') {
            FieldGroup.push(headerTemplateCol2);
          } else {
            FieldGroup.push(controlCol2);
          }

          if (configurationModel.lines[lineIndex].columns[3].control.type === 'header') {
            FieldGroup.push(headerTemplateCol3);
          } else {
            FieldGroup.push(controlCol3);
          }

          formlyModel.push({
            className: 'row',
            fieldGroup: FieldGroup
          });
        };
        addFiveColumnControl = function addFiveColumnControl(formlyModel, configurationModel, lineIndex) {
          //text header is stored in "description" in templateOtion model
          var headerTemplateCol0 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol1 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol2 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[2].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol3 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[3].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol4 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[4].control) + '<h2><hr/></div></div>'
          };
          var emptyTemplateCol5 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class="text-center"></div></div>'
          };
          var controlCol0 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[0].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[0].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[0].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[0].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[0].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[0].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[0].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[0].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[0].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol0, configurationModel, lineIndex);
          }

          var controlCol1 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[1].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[1].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[1].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[1].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[1].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[1].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[1].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[1].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[1].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[1].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[1].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[1].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[1].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol1, configurationModel, lineIndex);
          }
          var controlCol2 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[2].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[2].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[2].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[2].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[2].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[2].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[2].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[2].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[2].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[2].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[2].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[2].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[2].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[2].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[2].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[2].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol2, configurationModel, lineIndex);
          }

          var controlCol3 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[3].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[3].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[3].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[3].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[3].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[3].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[3].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[3].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[3].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[3].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[3].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[3].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[3].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[3].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[3].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[3].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol3, configurationModel, lineIndex);
          }

          var controlCol4 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[4].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[4].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[4].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[4].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[4].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[4].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[4].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[4].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[4].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[4].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[4].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[4].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[4].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[4].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[4].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[4].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol4, configurationModel, lineIndex);
          }

          var FieldGroup = [];
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'header') {
            FieldGroup.push(headerTemplateCol0);
          } else {
            FieldGroup.push(controlCol0);
          }

          if (configurationModel.lines[lineIndex].columns[1].control.type === 'header') {
            FieldGroup.push(headerTemplateCol1);
          } else {
            FieldGroup.push(controlCol1);
          }

          if (configurationModel.lines[lineIndex].columns[2].control.type === 'header') {
            FieldGroup.push(headerTemplateCol2);
          } else {
            FieldGroup.push(controlCol2);
          }

          if (configurationModel.lines[lineIndex].columns[3].control.type === 'header') {
            FieldGroup.push(headerTemplateCol3);
          } else {
            FieldGroup.push(controlCol3);
          }

          if (configurationModel.lines[lineIndex].columns[4].control.type === 'header') {
            FieldGroup.push(headerTemplateCol4);
          } else {
            FieldGroup.push(controlCol4);
          }
          /* add a empty component at the right side */
          FieldGroup.push(emptyTemplateCol5);
          formlyModel.push({
            className: 'row',
            fieldGroup: FieldGroup
          });
        };
        addSixColumnControl = function addSixColumnControl(formlyModel, configurationModel, lineIndex) {
          //text header is stored in "description" in templateOtion model
          var headerTemplateCol0 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol1 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol2 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[2].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol3 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[3].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol4 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[4].control) + '<h2><hr/></div></div>'
          };
          var headerTemplateCol5 = {
            className: 'col-xs-2',
            template: '<div class="row"><div class=""><h2 class="text-center heading-black">' + extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[5].control) + '<h2><hr/></div></div>'
          };
          var controlCol0 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[0].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[0].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[0].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[0].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[0].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[0].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[0].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[0].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[0].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol0, configurationModel, lineIndex);
          }

          var controlCol1 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[1].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[1].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[1].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[1].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[1].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[1].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[1].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[1].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[1].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[1].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[1].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[1].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[1].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol1, configurationModel, lineIndex);
          }
          var controlCol2 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[2].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[2].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[2].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[2].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[2].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[2].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[2].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[2].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[2].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[2].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[2].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[2].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[2].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[2].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[2].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[2].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol2, configurationModel, lineIndex);
          }

          var controlCol3 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[3].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[3].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[3].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[3].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[3].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[3].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[3].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[3].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[3].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[3].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[3].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[3].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[3].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[3].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[3].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[3].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol3, configurationModel, lineIndex);
          }

          var controlCol4 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[4].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[4].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[4].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[4].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[4].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[4].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[4].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[4].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[4].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[4].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[4].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[4].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[4].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[4].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[4].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[4].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol4, configurationModel, lineIndex);
          }

          var controlCol5 = {
            className: 'col-xs-2',
            type: typeof configurationModel.lines[lineIndex].columns[5].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[5].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[5].control.type : 'blank',
            key: typeof configurationModel.lines[lineIndex].columns[5].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[5].control.key : 'blank' + Date.now(),
            templateOptions: {
              type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[5].control),
              label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[5].control),
              required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[5].control),
              placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[5].control),
              description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[5].control),
              options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[5].control)
            },
            expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[5].control),
            defaultValue: extractFormlyDefaultValue(configurationModel.lines[lineIndex].columns[5].control),
            validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[5].control),
            validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[5].control)
          };
          //////////////////////////////////////////////
          //datepicker additionnal particular property
          //////////////////////////////////////////////
          if (configurationModel.lines[lineIndex].columns[5].control.type === 'datepicker') {
            addDatepickerPopupProperty(controlCol5, configurationModel, lineIndex);
          }

          var FieldGroup = [];
          if (configurationModel.lines[lineIndex].columns[0].control.type === 'header') {
            FieldGroup.push(headerTemplateCol0);
          } else {
            FieldGroup.push(controlCol0);
          }

          if (configurationModel.lines[lineIndex].columns[1].control.type === 'header') {
            FieldGroup.push(headerTemplateCol1);
          } else {
            FieldGroup.push(controlCol1);
          }

          if (configurationModel.lines[lineIndex].columns[2].control.type === 'header') {
            FieldGroup.push(headerTemplateCol2);
          } else {
            FieldGroup.push(controlCol2);
          }

          if (configurationModel.lines[lineIndex].columns[3].control.type === 'header') {
            FieldGroup.push(headerTemplateCol3);
          } else {
            FieldGroup.push(controlCol3);
          }

          if (configurationModel.lines[lineIndex].columns[4].control.type === 'header') {
            FieldGroup.push(headerTemplateCol4);
          } else {
            FieldGroup.push(controlCol4);
          }

          if (configurationModel.lines[lineIndex].columns[5].control.type === 'header') {
            FieldGroup.push(headerTemplateCol5);
          } else {
            FieldGroup.push(controlCol5);
          }

          formlyModel.push({
            className: 'row',
            fieldGroup: FieldGroup
          });
        };
        resetDataModel = function resetDataModel(obj) {
          var emptyDataModel = {};
          angular.copy(emptyDataModel, obj);
          return true;
        };
        resetFormlyModel = function resetFormlyModel(formlyModel) {
          var resetformly = [];
          angular.copy(resetformly, formlyModel);
        };
        _export('configurationModelInit', configurationModelInit);
        _export('configurationModelResult', configurationModelResult);
        _export('resetDataModel', resetDataModel);
        _export('resetFormlyModel', resetFormlyModel);
        _export('isTemplateOptionDefined', isTemplateOptionDefined);
        _export('extractTemplateOptionLabel', extractTemplateOptionLabel);
        _export('extractTemplateOptionDatepickerPopup', extractTemplateOptionDatepickerPopup);
        _export('extractFormlyExpressionProperties', extractFormlyExpressionProperties);
        _export('extractFormlyDefaultValue', extractFormlyDefaultValue);
        _export('extractFormlyValidators', extractFormlyValidators);
        _export('extractFormlyValidation', extractFormlyValidation);
        _export('extractTemplateOptionRequired', extractTemplateOptionRequired);
        _export('extractTemplateOptionOptions', extractTemplateOptionOptions);
        _export('extractTemplateOptionType', extractTemplateOptionType);
        _export('extractTemplateOptionPlaceholder', extractTemplateOptionPlaceholder);
        _export('extractTemplateOptionDescription', extractTemplateOptionDescription);
        _export('addDatepickerPopupProperty', addDatepickerPopupProperty);
        _export('addOneColumnHeader', addOneColumnHeader);
        _export('addOneColumnControl', addOneColumnControl);
        _export('addTwoColumnControl', addTwoColumnControl);
        _export('addThreeColumnControl', addThreeColumnControl);
        _export('addFourColumnControl', addFourColumnControl);
        _export('addFiveColumnControl', addFiveColumnControl);
        _export('addSixColumnControl', addSixColumnControl);
      }
    };
  });
  $__System.register('1f', ['15', '16', '1e'], function (_export) {
    var _createClass, _classCallCheck, configurationModelInit, configurationModelResult, resetDataModel, resetFormlyModel, isTemplateOptionDefined, extractTemplateOptionLabel, extractTemplateOptionDatepickerPopup, extractFormlyExpressionProperties, extractFormlyValidators, extractFormlyValidation, extractTemplateOptionRequired, extractTemplateOptionOptions, extractTemplateOptionType, extractTemplateOptionPlaceholder, extractTemplateOptionDescription, addDatepickerPopupProperty, addOneColumnHeader, addOneColumnControl, addTwoColumnControl, addThreeColumnControl, addFourColumnControl, addFiveColumnControl, addSixColumnControl, FORMLY_PROXY_SERVICE, $formlyProxy;
    return {
      setters: [function (_) {
        _createClass = _['default'];
      }, function (_2) {
        _classCallCheck = _2['default'];
      }, function (_e) {
        configurationModelInit = _e.configurationModelInit;
        configurationModelResult = _e.configurationModelResult;
        resetDataModel = _e.resetDataModel;
        resetFormlyModel = _e.resetFormlyModel;
        isTemplateOptionDefined = _e.isTemplateOptionDefined;
        extractTemplateOptionLabel = _e.extractTemplateOptionLabel;
        extractTemplateOptionDatepickerPopup = _e.extractTemplateOptionDatepickerPopup;
        extractFormlyExpressionProperties = _e.extractFormlyExpressionProperties;
        extractFormlyDefaultValue = _e.extractFormlyDefaultValue;
        extractFormlyValidators = _e.extractFormlyValidators;
        extractFormlyValidation = _e.extractFormlyValidation;
        extractTemplateOptionRequired = _e.extractTemplateOptionRequired;
        extractTemplateOptionOptions = _e.extractTemplateOptionOptions;
        extractTemplateOptionType = _e.extractTemplateOptionType;
        extractTemplateOptionPlaceholder = _e.extractTemplateOptionPlaceholder;
        extractTemplateOptionDescription = _e.extractTemplateOptionDescription;
        addDatepickerPopupProperty = _e.addDatepickerPopupProperty;
        addOneColumnHeader = _e.addOneColumnHeader;
        addOneColumnControl = _e.addOneColumnControl;
        addTwoColumnControl = _e.addTwoColumnControl;
        addThreeColumnControl = _e.addThreeColumnControl;
        addFourColumnControl = _e.addFourColumnControl;
        addFiveColumnControl = _e.addFiveColumnControl;
        addSixColumnControl = _e.addSixColumnControl;
      }],
      execute: function () {
        /* global angular */
        'use strict';
        FORMLY_PROXY_SERVICE = '$formlyProxy';
        $formlyProxy = (function () {
          function $formlyProxy() {
            _classCallCheck(this, $formlyProxy);
            this.init();
          }

          _createClass($formlyProxy, [{
            key: 'init',
            value: function init() {}
          }, {
            key: 'initConfigurationEditFromScratch',
            value: function initConfigurationEditFromScratch(configurationModel) {
              angular.copy(configurationModelInit, configurationModel);
            }
          }, {
            key: 'bindConfigurationLines',
            value: function bindConfigurationLines(configurationModel, lines) {
              if (angular.isArray(lines)) {
                var configModelResult = configurationModelResult;
                configModelResult.lines = [].concat(lines);
                angular.copy(configModelResult, configurationModel);
                return this.getMessageObject('configuration model is bound', 'lines are bound to configuration model.');
              } else {
                return this.getErrorObject('lines is not an array', 'Checks lines type, it is not an array.');
              }
            }
          }, {
            key: 'applyConfigurationToformlyModel',
            value: function applyConfigurationToformlyModel(configurationModel, formlyModel, formlyDataModel) {
              resetFormlyModel(formlyModel);
              resetDataModel(formlyDataModel);
              /**
               * manage header here line0
               */
              var lineNumber = configurationModel.lines.length;
              for (var i = 0; i < lineNumber; i++) {
                //1 column line control
                if (configurationModel.lines[i].columns.length === 1) {
                  //test if template control = header
                  if (configurationModel.lines[i].columns[0].control.type === 'header') {
                    addOneColumnHeader(formlyModel, configurationModel, i);
                  } else {
                    addOneColumnControl(formlyModel, configurationModel, i);
                  }
                }
                if (configurationModel.lines[i].columns.length === 2) {
                  addTwoColumnControl(formlyModel, configurationModel, i);
                }
                if (configurationModel.lines[i].columns.length === 3) {
                  addThreeColumnControl(formlyModel, configurationModel, i);
                }
                if (configurationModel.lines[i].columns.length === 4) {
                  addFourColumnControl(formlyModel, configurationModel, i);
                }
                if (configurationModel.lines[i].columns.length === 5) {
                  addFiveColumnControl(formlyModel, configurationModel, i);
                }
                if (configurationModel.lines[i].columns.length === 6) {
                  addSixColumnControl(formlyModel, configurationModel, i);
                }
              }
            }
          }, {
            key: 'getMessageObject',
            value: function getMessageObject(messageTitle, messageBody) {
              var messageObj = {
                noError: true,
                title: messageTitle,
                Message: messageBody
              };
              return messageObj;
            }
          }]);
          return $formlyProxy;
        })();
        $formlyProxy.$inject = [];
        _export('default', $formlyProxy);
        _export('FORMLY_PROXY_SERVICE', FORMLY_PROXY_SERVICE);
      }
    };
  });
  $__System.register('20', ['1f'], function (_export) {
    /* global angular */
    'use strict';
    var $formlyProxy, FORMLY_PROXY_SERVICE, FORMLY_PROXY_MODULE_NAME;
    return {
      setters: [function (_f) {
        $formlyProxy = _f['default'];
        FORMLY_PROXY_SERVICE = _f.FORMLY_PROXY_SERVICE;
      }],
      execute: function () {
        FORMLY_PROXY_MODULE_NAME = 'formlyProxyModule';
        _export('default', angular.module(FORMLY_PROXY_MODULE_NAME, []).service(FORMLY_PROXY_SERVICE, $formlyProxy));
      }
    };
  });
  $__System.registerDynamic("21", [], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    var $Object = Object;
    module.exports = {
      create: $Object.create,
      getProto: $Object.getPrototypeOf,
      isEnum: {}.propertyIsEnumerable,
      getDesc: $Object.getOwnPropertyDescriptor,
      setDesc: $Object.defineProperty,
      setDescs: $Object.defineProperties,
      getKeys: $Object.keys,
      getNames: $Object.getOwnPropertyNames,
      getSymbols: $Object.getOwnPropertySymbols,
      each: [].forEach
    };
    global.define = __define;
    return module.exports;
  });
  $__System.registerDynamic("22", ["21"], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    var $ = $__require('21');
    module.exports = function defineProperty(it, key, desc) {
      return $.setDesc(it, key, desc);
    };
    global.define = __define;
    return module.exports;
  });
  $__System.registerDynamic("23", ["22"], true, function($__require, exports, module) {
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    module.exports = {
      "default": $__require('22'),
      __esModule: true
    };
    global.define = __define;
    return module.exports;
  });
  $__System.registerDynamic("15", ["23"], true, function($__require, exports, module) {
    "use strict";
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    var _Object$defineProperty = $__require('23')["default"];
    exports["default"] = (function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          _Object$defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();
    exports.__esModule = true;
    global.define = __define;
    return module.exports;
  });
  $__System.registerDynamic("16", [], true, function($__require, exports, module) {
    "use strict";
    ;
    var global = this,
        __define = global.define;
    global.define = undefined;
    exports["default"] = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    exports.__esModule = true;
    global.define = __define;
    return module.exports;
  });
  $__System.register('24', ['15', '16'], function (_export) {
    var _createClass, _classCallCheck, SELECT_OPTION_MANAGE_NAME, selectOptionManage;
    return {
      setters: [function (_) {
        _createClass = _['default'];
      }, function (_2) {
        _classCallCheck = _2['default'];
      }],
      execute: function () {
        /* global angular */

        'use strict';
        SELECT_OPTION_MANAGE_NAME = 'selectOptionManage';
        selectOptionManage = (function () {
          function selectOptionManage() {
            _classCallCheck(this, selectOptionManage);
          }

          _createClass(selectOptionManage, [{
            key: 'initModel',
            value: function initModel(selectObj) {
              this.resetModel(selectObj);
            }
          }, {
            key: 'resetModel',
            value: function resetModel(selectObj) {
              var zeroModel = { rows: [] };
              angular.copy(zeroModel, selectObj);
            }
          }, {
            key: 'isOptionUnique',
            value: function isOptionUnique(selectObj, textValue) {
              for (var i = selectObj.rows.length - 1; i >= 0; i--) {
                if (selectObj.rows[i].option === textValue) return false;
              }
              return true;
            }
          }, {
            key: 'isOptionValidFormat',
            value: function isOptionValidFormat(textValue) {
              if (textValue !== '') return true;
              return false;
            }
          }, {
            key: 'addNewOptionRadio',
            value: function addNewOptionRadio(selectObj, newOptionText) {
              var fullResponse = {
                resultFlag: false,
                details: ''
              };
              var checkResult = this.validOption(selectObj, newOptionText);
              if (checkResult.resultFlag === true) {

                var newOption = {
                  option: newOptionText,
                  order: selectObj.rows.length
                };
                selectObj.rows.push(newOption);
                fullResponse.resultFlag = true;
                fullResponse.details = '';
                return fullResponse;
              } else {
                angular.copy(checkResult, fullResponse);
                return fullResponse;
              }
            }
          }, {
            key: 'addNewOptionBasicSelect',
            value: function addNewOptionBasicSelect(selectObj, newOptionText) {
              var fullResponse = {
                resultFlag: false,
                details: ''
              };
              var checkResult = this.validOption(selectObj, newOptionText);
              if (checkResult.resultFlag === true) {

                var newOption = {
                  option: newOptionText,
                  order: selectObj.rows.length
                };
                selectObj.rows.push(newOption);
                fullResponse.resultFlag = true;
                fullResponse.details = '';
                return fullResponse;
              } else {
                angular.copy(checkResult, fullResponse);
                return fullResponse;
              }
            }
          }, {
            key: 'addNewOptionGroupedSelect',
            value: function addNewOptionGroupedSelect(selectObj, newOptionText, newOptionGroup) {
              var fullResponse = {
                resultFlag: false,
                details: ''
              };
              var checkResult = this.validOption(selectObj, newOptionText);
              if (checkResult.resultFlag === true) {

                var newOption = {
                  option: newOptionText,
                  group: newOptionGroup,
                  order: selectObj.rows.length
                };
                selectObj.rows.push(newOption);
                fullResponse.resultFlag = true;
                fullResponse.details = '';
                return fullResponse;
              } else {
                angular.copy(checkResult, fullResponse);
                return fullResponse;
              }
            }
          }, {
            key: 'removeOption',
            value: function removeOption(selectObj, AtIndex) {
              var fullResponse = {
                resultFlag: false,
                details: ''
              };
              if (AtIndex !== - 1) {
                selectObj.rows.splice(AtIndex, 1);
                fullResponse.resultFlag = true;
                fullResponse.details = '';
                return fullResponse;
              } else {
                fullResponse.resultFlag = false;
                fullResponse.details = 'Option index not valid';
                return fullResponse;
              }
            }
          }, {
            key: 'upthisOption',
            value: function upthisOption(selectObj, indexOption) {
              var fullResponse = {
                resultFlag: false,
                details: ''
              };
              if (indexOption > - 1) {
                if (indexOption > 0) {
                  if (selectObj.rows[indexOption - 1]) {
                    var currentOption = selectObj.rows[indexOption];
                    selectObj.rows.splice(indexOption, 1);
                    selectObj.rows.splice(indexOption - 1, 0, currentOption);
                    fullResponse.resultFlag = true;
                    fullResponse.details = '';
                    return fullResponse;
                  } else {
                    fullResponse.resultFlag = false;
                    fullResponse.details = 'Can\'t retreive option from option index';
                    return fullResponse;
                  }
                } else {
                  fullResponse.resultFlag = true;
                  fullResponse.details = '';
                  return fullResponse;
                }
              } else {
                fullResponse.resultFlag = false;
                fullResponse.details = 'Option index not valid';
                return fullResponse;
              }
            }
          }, {
            key: 'downthisOption',
            value: function downthisOption(selectObj, indexOption) {
              var fullResponse = {
                resultFlag: false,
                details: ''
              };
              if (indexOption > - 1) {
                if (indexOption < selectObj.rows.length - 1) {
                  if (selectObj.rows[indexOption + 1]) {
                    var currentOption = selectObj.rows[indexOption];
                    selectObj.rows.splice(indexOption, 1);
                    selectObj.rows.splice(indexOption + 1, 0, currentOption);
                    fullResponse.resultFlag = true;
                    fullResponse.details = '';
                    return fullResponse;
                  } else {
                    fullResponse.resultFlag = false;
                    fullResponse.details = 'Can\'t retreive option from option index';
                    return fullResponse;
                  }
                } else {
                  fullResponse.resultFlag = true;
                  fullResponse.details = '';
                  return fullResponse;
                }
              } else {
                fullResponse.resultFlag = false;
                fullResponse.details = 'Option index not valid';
                return fullResponse;
              }
            }
          }, {
            key: 'validOption',
            value: function validOption(selectObj, newOptionText) {
              var fullResponse = {
                resultFlag: false,
                details: ''
              };
              if (typeof newOptionText === 'undefined') {
                fullResponse.resultFlag = false;
                fullResponse.details = 'Entered option is empty';
                return fullResponse;
              }

              if (newOptionText !== '') {
                for (var i = selectObj.rows.length - 1; i >= 0; i--) {
                  if (selectObj.rows[i].option === newOptionText) {
                    fullResponse.resultFlag = false;
                    fullResponse.details = 'Entered option is not unique';
                    return fullResponse;
                  }
                }
                fullResponse.resultFlag = true;
                fullResponse.details = '';
                return fullResponse;
              }
              fullResponse.resultFlag = false;
              fullResponse.details = 'Entered option is empty';
              return fullResponse;
            }
          }]);
          return selectOptionManage;
        })();
        selectOptionManage.$inject = [];
        _export('default', selectOptionManage);
        _export('SELECT_OPTION_MANAGE_NAME', SELECT_OPTION_MANAGE_NAME);
      }
    };
  });
  $__System.register('25', ['24'], function (_export) {
    /* global angular */
    'use strict';
    var selectOptionManage, SELECT_OPTION_MANAGE_NAME, COMMON_MODULE_NAME;
    return {
      setters: [function (_) {
        selectOptionManage = _['default'];
        SELECT_OPTION_MANAGE_NAME = _.SELECT_OPTION_MANAGE_NAME;
      }],
      execute: function () {
        COMMON_MODULE_NAME = 'commonModule';
        _export('default', angular.module(COMMON_MODULE_NAME, []).service(SELECT_OPTION_MANAGE_NAME, selectOptionManage));
      }
    };
  });
  $__System.register('1', ['2', '4', '6', '19', '20', '25', 'e', 'f', '1a', '1d'], function (_export) {
    'use strict';
    var easyFormStepWayConfig, EASY_FORM_VERSION_NAME, EASY_FORM_VERSION_VALUE, formlyConfig, easyFormStepwayMainModule, easyFormStepwayFormlyProxyModule, easyFormStepwayCommonModules, translateConfig, easyFormStepWayCoreModule, easyFormStepwayModalModule, easyFormStepwayModalProxyModule, STEP_WAY_MODULE_NAME, STEP_WAY_MODULES_INJECT, mainModule;
    return {
      setters: [function (_) {}, function (_2) {
        easyFormStepWayConfig = _2['default'];
        EASY_FORM_VERSION_NAME = _2.EASY_FORM_VERSION_NAME;
        EASY_FORM_VERSION_VALUE = _2.EASY_FORM_VERSION_VALUE;
      }, function (_3) {
        formlyConfig = _3['default'];
      }, function (_4) {
        easyFormStepwayMainModule = _4['default'];
      }, function (_5) {
        easyFormStepwayFormlyProxyModule = _5['default'];
      }, function (_6) {
        easyFormStepwayCommonModules = _6['default'];
      }, function (_e) {
        translateConfig = _e['default'];
      }, function (_f) {
        easyFormStepWayCoreModule = _f['default'];
      }, function (_a) {
        easyFormStepwayModalModule = _a['default'];
      }, function (_d) {
        easyFormStepwayModalProxyModule = _d['default'];
      }],
      execute: function () {
        STEP_WAY_MODULE_NAME = 'eda.easyformGen.stepway';
        STEP_WAY_MODULES_INJECT = [easyFormStepWayCoreModule.name, translateConfig.name, easyFormStepwayMainModule.name, easyFormStepwayModalModule.name, easyFormStepwayModalProxyModule.name, easyFormStepwayFormlyProxyModule.name, easyFormStepwayCommonModules.name];
        mainModule = angular.module(STEP_WAY_MODULE_NAME, STEP_WAY_MODULES_INJECT).value(EASY_FORM_VERSION_NAME, EASY_FORM_VERSION_VALUE).config(formlyConfig).config(easyFormStepWayConfig);
        _export('default', mainModule);
      }
    };
  });
})
(function(factory) {
  factory();
});
//# sourceMappingURL=eda.stepway.js.map
