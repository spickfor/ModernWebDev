import Parse from "parse";

// Initialize Parse with environment variables
import * as ENV from "../../environments.js";
Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;

// Fetch issues from the Parse database
export const fetchIssues = async () => {
    const Issue = Parse.Object.extend("CustomerSupport"); // "CustomerSupport" is the class name in Back4App
    const query = new Parse.Query(Issue);
    
    try {
        const results = await query.find();
        const fetchedIssues = results.map(issue => ({
            name: issue.get("name"), // Fetch 'name'
            description: issue.get("description"),
            status: issue.get("status") // Fetch 'status'
        }));
        return fetchedIssues; // Return the array of issues
    } catch (error) {
        console.error("Error fetching issues:", error);
        throw new Error("Error fetching issues");
    }
};