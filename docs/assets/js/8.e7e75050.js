(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("Dans cet atelier, vous allez migrer un application existante, codée en Java, en une application codée en Kotlin.")]),e._v(" "),s("p",[e._v("L'application de base est une application maven, composée de plusieurs modules :")]),e._v(" "),s("ul",[e._m(1),e._v(" "),s("li",[s("code",[e._v("fetcher")]),e._v(" : un module "),s("strong",[e._v("Spring boot")]),e._v(" de type console qui permet de récupérer les données depuis la "),s("a",{attrs:{href:"https://pokeapi.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pokeapi"),s("OutboundLink")],1),e._v(" et de générer un fichier de script sql")]),e._v(" "),e._m(2),e._v(" "),e._m(3)]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Pour bien démarrer, assurez-vous d'avoir les outils suivant d'installés :")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.java.com/fr/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JDK 8 ou supérieur"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Votre IDE préféré")])]),e._v(" "),s("p",[e._v("Ensuite téléchargez le projet depuis github :")]),e._v(" "),e._m(5),e._m(6),e._v(" "),s("p",[e._v("Ouvrez le projet dans votre IDE et assurez-vous que celui-ci build :")]),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),s("p",[e._v("Récupérez la liste des pokemons :")]),e._v(" "),e._m(12),s("p",[e._v("Lancez un combat :")]),e._v(" "),e._m(13),s("p",[e._v("et vérifiez le statut de celui-ci :")]),e._v(" "),e._m(14)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("core")]),this._v(" : le module contenant les entités et les utilitaires métiers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("api")]),this._v(" : un module "),t("strong",[this._v("Spring boot")]),this._v(" web avec une base de donnée JPA qui expose une API qui permet de lister les pokemons et de les faire s'affronter. L'affrontement est réalisé par un autre module")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("arena")]),this._v(" : un module "),t("strong",[this._v("Spring boot")]),this._v(" web avec une base de donnée Mongo qui expose une API qui permet de faire s'affronter les Pokemon tour par tour lors d'un batch")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"recuperation-du-projet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recuperation-du-projet","aria-hidden":"true"}},[this._v("#")]),this._v(" Récupération du projet")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/mathieumure/handson-springboot-to-kotlin.git\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"lancement-du-projet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lancement-du-projet","aria-hidden":"true"}},[this._v("#")]),this._v(" Lancement du projet")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("mvn clean "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("et que le module "),t("code",[this._v("api")]),this._v(" démarre :")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" api/\nmvn spring-boot:run\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("ainsi que le module "),t("code",[this._v("arena")]),this._v(" :")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" arena/\nmvn spring-boot:run\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("curl")]),this._v(" http://localhost:8080/pokemons\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("curl")]),this._v(" http://localhost:8080/pokemons/3/vs/6\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("curl")]),this._v(" http://localhost:8080/pokemons/battle/"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("THE ID RETURNED PREVIOUSLY"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])])])}],!1,null,null,null);r.options.__file="GETTING_STARTED.md";t.default=r.exports}}]);