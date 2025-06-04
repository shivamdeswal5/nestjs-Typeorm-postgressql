"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var post_entity_1 = require("src/post/entities/post.entity");
var company_entity_1 = require("src/company/entities/company.entity");
var User = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _age_decorators;
    var _age_initializers = [];
    var _age_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _gender_decorators;
    var _gender_initializers = [];
    var _gender_extraInitializers = [];
    var _posts_decorators;
    var _posts_initializers = [];
    var _posts_extraInitializers = [];
    var _companies_decorators;
    var _companies_initializers = [];
    var _companies_extraInitializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.username = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _username_initializers, void 0));
            this.email = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.age = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _age_initializers, void 0));
            this.password = (__runInitializers(this, _age_extraInitializers), __runInitializers(this, _password_initializers, void 0));
            this.gender = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _gender_initializers, void 0));
            this.posts = (__runInitializers(this, _gender_extraInitializers), __runInitializers(this, _posts_initializers, void 0));
            this.companies = (__runInitializers(this, _posts_extraInitializers), __runInitializers(this, _companies_initializers, void 0));
            __runInitializers(this, _companies_extraInitializers);
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: false })];
        _username_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 40, nullable: false })];
        _email_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 40, unique: true, nullable: false })];
        _age_decorators = [(0, typeorm_1.Column)({ type: 'int', nullable: false })];
        _password_decorators = [(0, typeorm_1.Column)({ type: 'varchar', nullable: false })];
        _gender_decorators = [(0, typeorm_1.Column)({ type: 'enum', enum: ['m', 'f', 'u'], nullable: false })];
        _posts_decorators = [(0, typeorm_1.OneToMany)(function () { return post_entity_1.Post; }, function (post) { return post.user; }, { nullable: false })];
        _companies_decorators = [(0, typeorm_1.ManyToMany)(function () { return company_entity_1.Company; }, function (company) { return company.users; }, { onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: false })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: function (obj) { return "age" in obj; }, get: function (obj) { return obj.age; }, set: function (obj, value) { obj.age = value; } }, metadata: _metadata }, _age_initializers, _age_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: function (obj) { return "gender" in obj; }, get: function (obj) { return obj.gender; }, set: function (obj, value) { obj.gender = value; } }, metadata: _metadata }, _gender_initializers, _gender_extraInitializers);
        __esDecorate(null, null, _posts_decorators, { kind: "field", name: "posts", static: false, private: false, access: { has: function (obj) { return "posts" in obj; }, get: function (obj) { return obj.posts; }, set: function (obj, value) { obj.posts = value; } }, metadata: _metadata }, _posts_initializers, _posts_extraInitializers);
        __esDecorate(null, null, _companies_decorators, { kind: "field", name: "companies", static: false, private: false, access: { has: function (obj) { return "companies" in obj; }, get: function (obj) { return obj.companies; }, set: function (obj, value) { obj.companies = value; } }, metadata: _metadata }, _companies_initializers, _companies_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
