import Role from "../models/role"

export const createRoles = async() => {

    try {
        const count = await role.estimatedDocumentCount()

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: "user" }).save(),
            new Role({ name: "admin" }).save()
        ])

    } catch (error) {
        console.error(error);
    }

}