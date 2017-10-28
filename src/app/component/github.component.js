"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var github_service_1 = require("../services/github.service");
var GithubComponent = (function () {
    function GithubComponent(_githubService) {
        this._githubService = _githubService;
        console.log('github com init');
        // this._githubService.getUser().subscribe(user => {
        //     //console.log(users);
        //     this.user = user;
        // });
        // this._githubService.getRepos().subscribe(repos => {
        //     //console.log(users);
        //     this.repos = repos;
        // });
    }
    GithubComponent.prototype.search = function () {
        var _this = this;
        console.log(this.username);
        this._githubService.updateUsername(this.username);
        this._githubService.getUser().subscribe(function (user) {
            //console.log(users);
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            //console.log(users);
            _this.repos = repos;
        });
    };
    return GithubComponent;
}());
GithubComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'github',
        templateUrl: 'github.component.html'
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], GithubComponent);
exports.GithubComponent = GithubComponent;
//# sourceMappingURL=github.component.js.map