import KeyKeyvLib from "keyv";
import KeyvLibMySQL from "@keyv/mysql";

export const Keyv = new KeyKeyvLib({store: new KeyvLibMySQL(process.env.DATABASE)});

Keyv.on("error", console.error);
