import { Express, Request, Response } from "express";

export default class IndexRoute {

	constructor(app: Express) {
		app.route("/").get(IndexRoute.index);
	}

	static index(req: Request, res: Response, next: Function):void {
    	res.render('index', { title: 'Express' });
	}
}