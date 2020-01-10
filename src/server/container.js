import Bottle from "bottlejs";
import config from "@config";
import App from "@app";
import hello from "./hello";
import error from "./error";

const botlle = new Bottle();

botlle.constant("config", config);
botlle.constant("hello", hello);
botlle.constant("error", error);
botlle.factory("app", container => App(container));

export default botlle.container;
