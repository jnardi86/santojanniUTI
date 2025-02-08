import {
    COLECTIONS,
    getDocuments,
    getDocumentsWithSubcolections
} from "../../core/db/firestore.db"

export const userHooks = () => {

    const handleGetCalificaciones = async () => {

        const urlFetchAPI = "https://script.google.com/macros/s/AKfycbyyB--cA8mVWZVAqk6silX6jBU2ozWqqz5hCYyuWg7KLVE47dnUyrqtEOH7PATrsXtp0Q/exec" //con API en campus.utisantojanni@gmail.com

        try {
            const allUserData = await getDocumentsWithSubcolections(COLECTIONS.PERFILES)
            console.log("All user data is: ", allUserData)

            //send data to google script
            const response = await fetch(urlFetchAPI, {
                method: 'POST',
                redirect: "follow",
                dataType: 'json',
                accepts: 'application/json',
                body: JSON.stringify(allUserData)
            });
            // Handle the response from the Google Apps Script endpoint
            const responseObject = await response.json();
            console.log("Response status: ", responseObject);

        } catch (error) {
            console.log(error)
        }
    }

    return {
        handleGetCalificaciones
    }

}