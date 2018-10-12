webpackJsonp([8],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_constantes__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ComentariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComentariosPage = /** @class */ (function () {
    function ComentariosPage(navCtrl, navParams, usuario) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuario = usuario;
        this.datos = { uid: this.usuario.uid, usuario: this.usuario.nombre, mensaje: '' };
        this.comentarios = [];
        this.usuarioActual = '';
        this.offStatus = false;
        this.blogKey = this.navParams.get("key");
        this.tituloBlog = this.navParams.get("titulo");
        this.usuarioActual = this.usuario.uid;
        this.datos.mensaje = '';
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('tablas/blogs/' + this.blogKey + '/comentarios').on('value', function (resp) {
            _this.comentarios = [];
            _this.comentarios = Object(__WEBPACK_IMPORTED_MODULE_3__environment_constantes__["b" /* snapshotToArray */])(resp);
            if (_this.offStatus === false) {
                setTimeout(function () {
                    _this.content.scrollToBottom(300);
                }, 1000);
            }
        });
    }
    ComentariosPage.prototype.sendMessage = function () {
        var newData = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('tablas/blogs/' + this.blogKey + '/comentarios').push();
        newData.set({
            uid: this.datos.uid,
            usuario: this.datos.usuario,
            mensaje: this.datos.mensaje,
            fecha: Date()
        });
        this.datos.mensaje = '';
    };
    ComentariosPage.prototype.ionViewDidLeave = function () {
        this.offStatus = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ComentariosPage.prototype, "content", void 0);
    ComentariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comentarios',template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/comentarios/comentarios.html"*/'<!--\n  Generated template for the ComentariosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{ tituloBlog }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let chat of comentarios" no-lines>\n      <div class="chat-message" text-right *ngIf="chat.uid === usuarioActual">\n        <div class="right-bubble">\n          <span class="msg-name">Yo</span>\n          <span class="msg-date">{{chat.fecha | date:\'short\'}}</span>\n          <p text-wrap>{{chat.mensaje}}</p>\n        </div>\n      </div>\n      <div class="chat-message" text-left *ngIf="chat.uid !== usuarioActual">\n        <div class="left-bubble">\n          <span class="msg-name">{{chat.usuario}}</span>\n          <span class="msg-date">{{chat.fecha | date:\'short\'}}</span>\n          <p text-wrap>{{chat.mensaje}}</p>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-10>\n        <ion-input type="text" placeholder="Escriba un comentario" [(ngModel)]="datos.mensaje" name="message"></ion-input>\n      </ion-col>\n      <ion-col col-2 (click)="sendMessage()">\n        <ion-icon name="paper-plane"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/comentarios/comentarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], ComentariosPage);
    return ComentariosPage;
}());

//# sourceMappingURL=comentarios.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComunidadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_constantes__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comentarios_comentarios__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ComunidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComunidadPage = /** @class */ (function () {
    function ComunidadPage(navCtrl, alertCtrl, toastCtrl, usuario) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.usuario = usuario;
        this.blogs = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref('tablas/blogs/').on('value', function (resp) {
            _this.blogs = [];
            _this.blogs = Object(__WEBPACK_IMPORTED_MODULE_3__environment_constantes__["b" /* snapshotToArray */])(resp);
        });
    }
    ComunidadPage.prototype.nuevoBlog = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Crear blog',
            inputs: [
                {
                    name: 'titulo',
                    placeholder: 'Titulo del blog'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Crear',
                    handler: function (data) {
                        if (data.titulo != '') {
                            var nuevoBlog = __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref('tablas/blogs').push();
                            nuevoBlog.set({
                                usuario_creador: _this.usuario.nombre,
                                correo_usuario: _this.usuario.correo,
                                titulo: data.titulo,
                                fecha: Date()
                            });
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: 'El título no puede ser vacío',
                                duration: 2000,
                                position: 'middle'
                            });
                            toast.present();
                            return false;
                        }
                    }
                }
            ],
            cssClass: 'customAlert'
        });
        alert.present();
    };
    ComunidadPage.prototype.abrirBlog = function (key, titulo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__comentarios_comentarios__["a" /* ComentariosPage */], { key: key, titulo: titulo });
    };
    ComunidadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comunidad',template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/comunidad/comunidad.html"*/'<!--\n  Generated template for the ComunidadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Comunidad</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="nuevoBlog()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let blog of blogs" (click)="abrirBlog(blog.key, blog.titulo)">{{blog.titulo}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/comunidad/comunidad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], ComunidadPage);
    return ComunidadPage;
}());

//# sourceMappingURL=comunidad.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguracionPage = /** @class */ (function () {
    function ConfiguracionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfiguracionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracionPage');
    };
    ConfiguracionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracion',template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/configuracion/configuracion.html"*/'<!--\n  Generated template for the ConfiguracionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Configuracion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/configuracion/configuracion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConfiguracionPage);
    return ConfiguracionPage;
}());

//# sourceMappingURL=configuracion.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HorariosPage = /** @class */ (function () {
    function HorariosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HorariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HorariosPage');
    };
    HorariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horarios',template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/horarios/horarios.html"*/'<!--\n  Generated template for the HorariosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Horarios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/horarios/horarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HorariosPage);
    return HorariosPage;
}());

//# sourceMappingURL=horarios.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_base_datos_base_datos__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autorizacion_autorizacion__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InfoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoUsuarioPage = /** @class */ (function () {
    function InfoUsuarioPage(autorizaProvider, usuario, bdProvider) {
        this.autorizaProvider = autorizaProvider;
        this.usuario = usuario;
        this.bdProvider = bdProvider;
        this.nombre = this.usuario.nombre;
        this.correo = this.usuario.correo;
    }
    InfoUsuarioPage.prototype.Logout = function () {
        this.autorizaProvider.Logout();
        this.bdProvider.BorrarUsuario()
            .then(function () {
            window.location.reload();
        });
    };
    InfoUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-usuario',template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/info-usuario/info-usuario.html"*/'<!--\n  Generated template for the InfoUsuarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>{{ nombre }}!</h1>\n  <p>Correo: {{ correo }}</p>\n  <p><button ion-button (click)="Logout()">Desconectar</button></p>\n\n</ion-content>\n'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/info-usuario/info-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_autorizacion_autorizacion__["a" /* AutorizacionProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_base_datos_base_datos__["a" /* BaseDatosProvider */]])
    ], InfoUsuarioPage);
    return InfoUsuarioPage;
}());

//# sourceMappingURL=info-usuario.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_plus__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autorizacion_autorizacion__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(authProvider) {
        this.authProvider = authProvider;
    }
    LoginPage.prototype.loginWithGoogle = function () {
        this.authProvider.googleLogin().subscribe(function () {
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.loginWithFacebook = function () {
        this.authProvider.facebookLogin()
            .then(function () {
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <article>\n    <section>\n        <img src="../assets/imgs/icono.png" alt="">\n        <ul>\n          <li><button class="red" ion-button (click)="loginWithGoogle()">Google+</button></li>\n          <li><button class="blue" ion-button (click)="loginWithFacebook()">Facebook</button></li>\n        </ul>\n    </section>\n  </article>\n</ion-content>\n'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_plus__["a" /* GooglePlus */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_autorizacion_autorizacion__["a" /* AutorizacionProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapaPage = /** @class */ (function () {
    function MapaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MapaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapaPage');
    };
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/mapa/mapa.html"*/'<!--\n  Generated template for the MapaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mapa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n  <p>\n    Brayan Herreño.\n  </p>\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/mapa/mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiasPage = /** @class */ (function () {
    function NoticiasPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.noticias1 = true;
    }
    NoticiasPage.prototype.ionViewDidLoad = function () {
        console.log('Welcome to ionViewDidLoad NoticiasPage');
        /**
         * loading para cargar toda la vista
         */
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        //#tContainer102 > p > a
    };
    NoticiasPage.prototype.open = function (item) {
        this.noticias1 = false;
        console.log(this.noticias1);
        this.get_page(item);
    };
    NoticiasPage.prototype.get_page = function (item) {
        /*this.posts = this.http.get('https://electronjs.org/docs/api/auto-updater#windows');
        console.log("RESULTADO DATOS: "+ item);
        console.log(this.posts);*/
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(this.responseXML.title);
        };
        xhr.open("GET", "https://electronjs.org/docs/api/auto-updater#windows");
        xhr.responseType = "document";
        xhr.send();
        console.log(xhr.response);
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/noticias/noticias.html"*/'<!--\n  Generated template for the NoticiasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Noticias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!--\n    Cards for noticies\n  -->\n  <div *ngIf="noticias1 == true">\n    <ion-card (click)="open(\'www.ciudadlimpia.com.co\')">\n      <img src="http://www.ciudadlimpia.com.co/index_files/lc-1.png" \n      style="display: block;margin-left: auto;margin-right: auto;width: 50%;"/>\n      <ion-card-content>\n        <ion-card-title>\n            Ciudad Limpia\n          </ion-card-title>\n        <p>\n            <strong>Ciudad Limpia Bogotá S.A. E.S.P</strong>  es una empresa de la organización FANALCA, \n            que se destaca por su acreditada experiencia en el manejo integral de residuos sólidos. \n            Desde hace más de 28 años ha estado presente en varias ciudades de Colombia como Cartagena, \n            Tunja y Yumbo en Barcelona, Guacara y Valencia en Venezuela, Chennai y Ambattur en India y en Colón Panamá.<br><br>\n  \n            Actualmente prestamos el servicio en Bogotá en las localidades de Kennedy y Fontibón, en Cali en 5 \n            comunas y 10 corregimientos que comprenden el centro y oeste del municipio, en la ciudad de Neiva \n            en el departamento del Huila y también en las ciudades de Santiago, Osorno y Punta Arena en Chile.\n        </p>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card (click)="open(\'arealimpia.com.co\')">\n      <img src="https://arealimpia.com.co/wp-content/uploads/2018/02/logo.png" \n      style="display: block;margin-left: auto;margin-right: auto;width: 50%;"/>\n      <ion-card-content>\n        <ion-card-title>\n            Areá Limpia\n          </ion-card-title>\n        <p>\n            Área Limpia Distrito Capital SAS ESP contribuye con el mejoramiento del entorno urbano y \n            las condiciones de habitabilidad de las comunidades a través de la prestación de servicios \n            públicos domiciliarios de aseo urbano con criterios de eficiencia y sostenibilidad.\n        </p>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card (click)="open(\'www.bogotalimpia.com\')">\n      <img src="http://www.bogotalimpia.com/wp-content/uploads/2018/02/logo_A.png" \n      style="display: block;margin-left: auto;margin-right: auto;width: 50%;"/>\n      <ion-card-content>\n        <ion-card-title>\n            Bogotá Limpia\n          </ion-card-title>\n        <p>\n            <strong>BOGOTÁ LIMPIA S.A.S. ESP.</strong> se constituyó el 10 de enero de 2018. Bogotá Limpia tiene como \n            objeto social único la celebración, ejecución y liquidación del contrato de concesión que \n            resultó adjudicado dentro de la Licitación Pública UAESP No. 02 de 2017, el día 3 de enero de 2018, \n            para la prestación del servicio público domiciliario de aseo en sus componentes de recolección, barrido, \n            limpieza de vías y áreas públicas, corte de césped, poda de árboles en áreas públicas y transporte de los \n            residuos al sitio de disposición final y todas las actividades de orden financiero, comercial, técnico, operativo, \n            educativo y administrativo que ello conlleva, para el área adjudicada dentro de la Licitación Pública UAESP No. 02 de 2017.\n        </p>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-card (click)="open(\'www.ciudadlimpia.com.co\')">\n      <img src="" \n      style="display: block;margin-left: auto;margin-right: auto;width: 50%;"/>\n      <ion-card-content>\n        <ion-card-title>\n            LIME\n          </ion-card-title>\n        <p>\n            <strong>LIME</strong>  es una empresa de dmsladkls dskadksa dksañdkñsa mdksadklsa.\n        </p>\n      </ion-card-content>\n    </ion-card>\n  \n        <!--ion-card>\n            <iframe width="420" height="315" src="http://www.ciudadlimpia.com.co/site/" frameborder="0" allowfullscreen></iframe>\n        </ion-card-->\n  </div>\n\n\n  <!--\n    Si la condicion no se cumple es porque ya ingresaron a un area especifica \n  -->\n  <div *ngIf="noticias1 == false">\n    <h1>Noticias</h1>\n    <ion-card>\n        <img src="http://www.bogotalimpia.com/wp-content/uploads/2018/02/logo_A.png" \n        style="display: block;margin-left: auto;margin-right: auto;width: 50%;"/>\n        <ion-card-content>\n          <ion-card-title>\n              LIME\n            </ion-card-title>\n          <p>\n              <strong>LIME</strong>  es una empresa de dmsladkls dskadksa dksañdkñsa mdksadklsa.\n          </p>\n        </ion-card-content>\n      </ion-card>\n  </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/noticias/noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comentarios/comentarios.module": [
		300,
		7
	],
	"../pages/comunidad/comunidad.module": [
		301,
		6
	],
	"../pages/configuracion/configuracion.module": [
		302,
		5
	],
	"../pages/horarios/horarios.module": [
		303,
		4
	],
	"../pages/info-usuario/info-usuario.module": [
		304,
		3
	],
	"../pages/login/login.module": [
		305,
		2
	],
	"../pages/mapa/mapa.module": [
		306,
		1
	],
	"../pages/noticias/noticias.module": [
		307,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_adicionales_menu_home__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    HomePage.prototype.AbrirMenuSuperior = function (evento) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_adicionales_menu_home__["a" /* MenuHomePage */]);
        popover.present({ ev: evento });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end> \n      <button ion-button icon-only (click)="AbrirMenuSuperior($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_info_usuario_info_usuario__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuHomePage = /** @class */ (function () {
    function MenuHomePage(viewCtrl, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
    }
    MenuHomePage.prototype.mostrarInfoUsuario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_info_usuario_info_usuario__["a" /* InfoUsuarioPage */]);
        this.viewCtrl.dismiss();
    };
    MenuHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-list>\n      <button ion-item (click)=\"mostrarInfoUsuario()\"><ion-icon name=\"person\"></ion-icon> Usuario</button>\n    </ion-list>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], MenuHomePage);
    return MenuHomePage;
}());

//# sourceMappingURL=menu-home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_comunidad_comunidad__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_comentarios_comentarios__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_configuracion_configuracion__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_horarios_horarios__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_noticias_noticias__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_adicionales_menu_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_info_usuario_info_usuario__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_autorizacion_autorizacion__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_sqlite__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_usuario_usuario__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_base_datos_base_datos__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_comunidad_comunidad__["a" /* ComunidadPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_comentarios_comentarios__["a" /* ComentariosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_configuracion_configuracion__["a" /* ConfiguracionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_horarios_horarios__["a" /* HorariosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_adicionales_menu_home__["a" /* MenuHomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_info_usuario_info_usuario__["a" /* InfoUsuarioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/comentarios/comentarios.module#ComentariosPageModule', name: 'ComentariosPage', segment: 'comentarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comunidad/comunidad.module#ComunidadPageModule', name: 'ComunidadPage', segment: 'comunidad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracion/configuracion.module#ConfiguracionPageModule', name: 'ConfiguracionPage', segment: 'configuracion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horarios/horarios.module#HorariosPageModule', name: 'HorariosPage', segment: 'horarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-usuario/info-usuario.module#InfoUsuarioPageModule', name: 'InfoUsuarioPage', segment: 'info-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_comunidad_comunidad__["a" /* ComunidadPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_comentarios_comentarios__["a" /* ComentariosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_configuracion_configuracion__["a" /* ConfiguracionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_horarios_horarios__["a" /* HorariosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_adicionales_menu_home__["a" /* MenuHomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_info_usuario_info_usuario__["a" /* InfoUsuarioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_autorizacion_autorizacion__["a" /* AutorizacionProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_base_datos_base_datos__["a" /* BaseDatosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_comunidad_comunidad__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_configuracion_configuracion__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_horarios_horarios__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mapa_mapa__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_noticias_noticias__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_usuario_usuario__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_base_datos_base_datos__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environment_constantes__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, usuario, bdProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.usuario = usuario;
        this.bdProvider = bdProvider;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Comunidad', component: __WEBPACK_IMPORTED_MODULE_5__pages_comunidad_comunidad__["a" /* ComunidadPage */] },
            { title: 'configuracion', component: __WEBPACK_IMPORTED_MODULE_6__pages_configuracion_configuracion__["a" /* ConfiguracionPage */] },
            { title: 'horarios', component: __WEBPACK_IMPORTED_MODULE_7__pages_horarios_horarios__["a" /* HorariosPage */] },
            { title: 'mapa', component: __WEBPACK_IMPORTED_MODULE_9__pages_mapa_mapa__["a" /* MapaPage */] },
            { title: 'noticias', component: __WEBPACK_IMPORTED_MODULE_10__pages_noticias_noticias__["a" /* NoticiasPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_14__environment_constantes__["a" /* firebaseConfig */]);
            _this.bdProvider.CrearBD()
                .then(function () {
                _this.bdProvider.ObtenerUsuarioActivo()
                    .then(function () {
                    if (_this.usuario.uid == null) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                        _this.splashScreen.hide();
                    }
                });
            })
                .catch(function (error) {
                console.error('initializeApp: ', error);
            });
            __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.auth().onAuthStateChanged(function (user) {
                if (user) {
                    _this.usuario.set(user.uid, user.displayName, user.email);
                    _this.bdProvider.CrearUsuario();
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Basinfo</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list style="background-color: white;">\n      <label style="background-color: white;font-size: 8px;text-align: center;color: gray;"> <img width="100" src="../assets/imgs/icono.png" alt="" srcset=""><br> <li>CopyRigth@2018 Fedesoft</li></label>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>  \n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_12__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_base_datos_base_datos__["a" /* BaseDatosProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/d13g0fd0/Documentos/Proyectos/Ionic/Basinfo/Basinfo/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider() {
    }
    UsuarioProvider.prototype.set = function (uid, nombre, correo) {
        this._iud = uid;
        this._nombre = nombre;
        this._correo = correo;
    };
    Object.defineProperty(UsuarioProvider.prototype, "uid", {
        get: function () {
            return this._iud;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioProvider.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioProvider.prototype, "correo", {
        get: function () {
            return this._correo;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return webClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return snapshotToArray; });
var firebaseConfig = {
    apiKey: "AIzaSyAhYKqLAjnjmzTuaz3MGC55-13WK-SkWBI",
    authDomain: "basinfo-552d3.firebaseapp.com",
    databaseURL: "https://basinfo-552d3.firebaseio.com",
    projectId: "basinfo-552d3",
    storageBucket: "basinfo-552d3.appspot.com",
    messagingSenderId: "889566051333"
};
var webClientId = '889566051333-jc2s2lmr1jcrku1of6dr6cm0tskj4rsj.apps.googleusercontent.com'; //Se encuentra en firebase Authentication -> Google
var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=constantes.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDatosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the BaseDatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BaseDatosProvider = /** @class */ (function () {
    function BaseDatosProvider(sqlite, usuario) {
        this.sqlite = sqlite;
        this.usuario = usuario;
    }
    BaseDatosProvider.prototype.CrearBD = function () {
        var _this = this;
        return this.sqlite.create({
            name: 'basinfo.db',
            location: 'default'
        })
            .then(function (db) {
            _this.basedatos = db;
            _this.CrearTablas();
        });
    };
    BaseDatosProvider.prototype.EjecutarQuery = function (sql, parametros) {
        if (parametros === void 0) { parametros = []; }
        return this.basedatos.executeSql(sql, parametros)
            .then(function (respuesta) {
            var arreglo = [];
            for (var index = 0; index < respuesta.rows.length; index++) {
                arreglo.push(respuesta.rows.item(index));
            }
            return Promise.resolve(arreglo);
        })
            .catch(function (error) { return console.log('EjecutarQuery: ' + sql, error); });
    };
    BaseDatosProvider.prototype.EjecutarNonQuery = function (sql, parametros) {
        return this.basedatos.executeSql(sql, parametros)
            .catch(function (error) { return console.log('EjecutarNonQuery: ' + sql, error); });
    };
    BaseDatosProvider.prototype.CrearTablas = function () {
        this.EjecutarNonQuery("CREATE TABLE IF NOT EXISTS USUARIO(\n      uid TEXT PRIMARY KEY,\n      nombre TEXT,\n      email TEXT)", [])
            .catch(function (err) { return console.log('CrearTablas: ', err); });
    };
    BaseDatosProvider.prototype.CrearUsuario = function () {
        var _this = this;
        this.BorrarUsuario()
            .then(function () {
            var sql = 'INSERT INTO USUARIO(uid, nombre, email) VALUES(?,?,?)';
            _this.EjecutarNonQuery(sql, [_this.usuario.uid, _this.usuario.nombre, _this.usuario.correo]);
        })
            .catch(function (error) { return console.log('EjecutarQuery: ', error); });
    };
    BaseDatosProvider.prototype.BorrarUsuario = function () {
        var sql = 'DELETE FROM USUARIO';
        return this.EjecutarNonQuery(sql, []);
    };
    BaseDatosProvider.prototype.ObtenerUsuarioActivo = function () {
        var _this = this;
        var datos;
        var sql = 'SELECT * FROM USUARIO LIMIT 1';
        return this.EjecutarQuery(sql)
            .then(function (data) {
            datos = datos = datos = data == null ? [] : data;
            for (var key in datos) {
                _this.usuario.set(data[key].uid, data[key].nombre, data[key].email);
            }
        })
            .catch(function (err) { return console.log('ObtenerUsuarioActivo: ', err); });
    };
    BaseDatosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], BaseDatosProvider);
    return BaseDatosProvider;
}());

//# sourceMappingURL=base-datos.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorizacionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_plus__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment_constantes__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AutorizacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AutorizacionProvider = /** @class */ (function () {
    function AutorizacionProvider(googlePlus, facebook) {
        this.googlePlus = googlePlus;
        this.facebook = facebook;
    }
    AutorizacionProvider.prototype.googleLogin = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            return _this.googlePlus.login({
                'webClientId': __WEBPACK_IMPORTED_MODULE_5__environment_constantes__["c" /* webClientId */],
                'scopes': 'profile email',
            })
                .then(function (res) {
                var firecreds = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth.GoogleAuthProvider.credential(res.idToken);
                __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().signInWithCredential(firecreds)
                    .then(function (success) { observer.next(success); })
                    .catch(function (error) {
                    observer.error('googleLogin: ', error);
                });
            });
        });
    };
    AutorizacionProvider.prototype.facebookLogin = function () {
        return this.facebook.login(['email'])
            .then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().signInWithCredential(facebookCredential);
        }).catch(function (error) { console.log('facebookLogin: ', error); });
    };
    AutorizacionProvider.prototype.Logout = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().signOut().then(function () {
        }, function (error) {
            console.log('Logout: ', error);
        });
    };
    AutorizacionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */]])
    ], AutorizacionProvider);
    return AutorizacionProvider;
}());

//# sourceMappingURL=autorizacion.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map