import { AccountsSchema } from "../models/schemas/accounts.schema.js";

export const getAccounts = async (req, res) => {
    try {
        const accounts = await AccountsSchema.findAll();
        return res.send(accounts);

    } catch (error) {
        res.status(401).send(`Error ${error.message}`);
    }
}
