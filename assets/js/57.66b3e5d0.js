(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{247:function(a,t,e){"use strict";e.r(t);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=e(6),i=Object(r.a)(s,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.slotKey}},[e("h1",{attrs:{id:"command-line-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface","aria-hidden":"true"}},[a._v("#")]),a._v(" Command-Line Interface")]),a._v(" "),e("blockquote",[e("p",[a._v("Directus CLI provides commands that allow you to perform various tasks such as installation, resetting a user's email, or upgrading the database to the most recent Directus schema.")])]),a._v(" "),e("h2",{attrs:{id:"commands-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commands-list","aria-hidden":"true"}},[a._v("#")]),a._v(" Commands List")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Name")]),a._v(" "),e("th",[a._v("Description")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"#configure-directus"}},[e("code",[a._v("install:config")])])]),a._v(" "),e("td",[a._v("Create a configuration file")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#populate-the-database-schema"}},[e("code",[a._v("install:database")])])]),a._v(" "),e("td",[a._v("Create the default tables and data")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#install-initial-configurations"}},[e("code",[a._v("install:install")])])]),a._v(" "),e("td",[a._v("Create initial configuration data")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#upgrade-directus-schema"}},[e("code",[a._v("db:upgrade")])])]),a._v(" "),e("td",[a._v("Upgrade the Database Schema")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#change-user-password"}},[e("code",[a._v("user:password")])])]),a._v(" "),e("td",[a._v("Change a user password")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#prune-old-log-files"}},[e("code",[a._v("log:prune")])])]),a._v(" "),e("td",[a._v("Remove old logs files")])])])]),a._v(" "),e("h2",{attrs:{id:"help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#help","aria-hidden":"true"}},[a._v("#")]),a._v(" Help")]),a._v(" "),e("p",[a._v("You can use the "),e("code",[a._v("help")]),a._v(" command at any time to learn about available CLI actions:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[a._v("# this will provide information about the current modules")]),a._v("\nphp bin/directus "),e("span",{attrs:{class:"token function"}},[a._v("help")]),a._v("\n")])])]),e("p",[a._v('To get more information on an specific command you can type "help" followed by the command:')]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[a._v("# this provide information about the **install** module")]),a._v("\nphp bin/directus "),e("span",{attrs:{class:"token function"}},[a._v("help")]),a._v(" "),e("span",{attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),e("h2",{attrs:{id:"install-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-module","aria-hidden":"true"}},[a._v("#")]),a._v(" Install Module")]),a._v(" "),e("p",[a._v("Includes commands to install and configure Directus.")]),a._v(" "),e("h3",{attrs:{id:"configure-directus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-directus","aria-hidden":"true"}},[a._v("#")]),a._v(" Configure Directus:")]),a._v(" "),e("p",[a._v("Creates the "),e("code",[a._v("config.api.php")]),a._v(" file.")]),a._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("This command will overwrite any existing default configuration file at "),e("code",[a._v("config.api.php")]),a._v(".")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php bin/directus install:config -h "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("db_host"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" -n "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("db_name"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" -u "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("db_user"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("db_pass"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" -e "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("directus_email"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("ul",[e("li",[e("code",[a._v("db_host")]),a._v(" - The database host")]),a._v(" "),e("li",[e("code",[a._v("db_name")]),a._v(" - The database name (it must already exist)")]),a._v(" "),e("li",[e("code",[a._v("db_user")]),a._v(" - The database user's name")]),a._v(" "),e("li",[e("code",[a._v("db_pass")]),a._v(" - The database user's password")]),a._v(" "),e("li",[e("code",[a._v("directus_email")]),a._v(" - (Optional) The Directus email that will be used as sender in the mailing process")])]),a._v(" "),e("h4",{attrs:{id:"example-http-example-local"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-http-example-local","aria-hidden":"true"}},[a._v("#")]),a._v(" Example: http://example.local")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php bin/directus install:config -h localhost -n directus -u root -p pass\n")])])]),e("h4",{attrs:{id:"example-http-example-local-directus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-http-example-local-directus","aria-hidden":"true"}},[a._v("#")]),a._v(" Example: http://example.local/directus")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php bin/directus install:config -h localhost -n directus -u root -p pass -d directus\n")])])]),e("h3",{attrs:{id:"populate-the-database-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#populate-the-database-schema","aria-hidden":"true"}},[a._v("#")]),a._v(" Populate the Database Schema:")]),a._v(" "),e("p",[a._v("Creates all of the Directus Core tables based on the configuration files: "),e("code",[a._v("/config/api.php")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php bin/directus install:database\n")])])]),e("h3",{attrs:{id:"install-initial-configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-initial-configurations","aria-hidden":"true"}},[a._v("#")]),a._v(" Install Initial Configurations:")]),a._v(" "),e("p",[a._v("Create the default admin user and the site's default settings.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php bin/directus install:install -e "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("admin_email"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("admin_password"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" -t "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("site_name"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("ul",[e("li",[e("code",[a._v("admin_email")]),a._v(" - The admin email")]),a._v(" "),e("li",[e("code",[a._v("admin_password")]),a._v(" - The admin password")]),a._v(" "),e("li",[e("code",[a._v("site_name")]),a._v(" - The project title")])]),a._v(" "),e("h4",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php bin/directus install:install -e admin@directus.local -p password -t "),e("span",{attrs:{class:"token string"}},[a._v('"Directus Example"')]),a._v("\n")])])]),e("h2",{attrs:{id:"user-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-module","aria-hidden":"true"}},[a._v("#")]),a._v(" User Module")]),a._v(" "),e("p",[a._v("Includes commands to manage Directus users")]),a._v(" "),e("h3",{attrs:{id:"change-user-password"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#change-user-password","aria-hidden":"true"}},[a._v("#")]),a._v(" Change User Password:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php bin/directus user:password -e "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("user_email"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("new_password"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("ul",[e("li",[e("code",[a._v("user_email")]),a._v(" - The user's email")]),a._v(" "),e("li",[e("code",[a._v("new_password")]),a._v(" - The user's new password")])]),a._v(" "),e("h4",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php bin/directus user:password -e admin@directus.local -p newpassword\n")])])]),e("h2",{attrs:{id:"database-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-module","aria-hidden":"true"}},[a._v("#")]),a._v(" Database Module")]),a._v(" "),e("p",[a._v("Includes commands to manage Directus database schema")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("This requires that Directus has a valid connection configured in "),e("code",[a._v("config/api.php")]),a._v(".")])]),a._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("Always backup your database before running the database module to prevent data loss.")])]),a._v(" "),e("h3",{attrs:{id:"upgrade-directus-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-directus-schema","aria-hidden":"true"}},[a._v("#")]),a._v(" Upgrade Directus Schema")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ bin/directus db:upgrade\n")])])]),e("p",[a._v("The command above will upgrade the default project database, to update an specific project the option "),e("code",[a._v("N")]),a._v(" can be used.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ bin/directus db:upgrade -N <project-name>\n")])])]),e("h2",{attrs:{id:"log-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log-module","aria-hidden":"true"}},[a._v("#")]),a._v(" Log Module")]),a._v(" "),e("h3",{attrs:{id:"prune-old-log-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prune-old-log-files","aria-hidden":"true"}},[a._v("#")]),a._v(" Prune Old Log Files")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php bin/directus log:prune "),e("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("days"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[e("code",[a._v("<days>")]),a._v(" is optional. The default value is "),e("code",[a._v("30")]),a._v(" days.")]),a._v(" "),e("p",[a._v("Removes all the logs that were last modified "),e("code",[a._v("<days>")]),a._v(" ago. it uses "),e("a",{attrs:{href:"http://php.net/manual/en/function.filemtime.php",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("filemtime")]),e("OutboundLink")],1),a._v(" function to determine the last modified time.")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("You can setup a cronjob to clean old files at a set frequency")])])])},[],!1,null,null,null);i.options.__file="cli.md";t.default=i.exports}}]);