/* eslint-disable @typescript-eslint/no-unused-vars */
import { Activity, Organization, User } from "./models";

const user = new User({
    name: "Jona",
    lastname: "Martino",
    birthday: new Date("1994-08-12"),
    email: "jonamartino@gmail.com",
    isAdmin: false
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const organization = new Organization({
    name: "Club Carriego de Rosario",
    description: "Un club deportivo y recreativo",
    email: "contacto@clubcarriego.com",
    phone: "+54 341 1234567",
    address: "Av. Pellegrini 1234, Rosario, Santa Fe, Argentina",
    website: "https://clubcarriego.com",
    logoUrl: "https://example.com/logo.png"
});

/*const activity = new Activity({
    title: "Clase de Natación",
    description: "Clase de natación para adultos de nivel intermedio. Incluye técnicas de nado libre y entrenamiento.",
    category: "Deporte",
    date: new Date("2025-02-15"),
    time: "18:00", 
    duration: 90, 
    price: 1500, 
    capacity: 20,
    organization: organization._id, 
    isActive: true
});*/
 
export const syncDatabase = async () => {
    try {
        // const newOrg = await organization.save()
        // activity.organization = newOrg.id;
        // await user.save()
        // await activity.save()
        console.log("Database synchronize 🟢")
    } catch (error) {
        console.error(error)
    }
}
