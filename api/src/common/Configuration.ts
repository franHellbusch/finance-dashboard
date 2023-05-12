import dotenv from "dotenv";

dotenv.config();

const Configuration = {
    globals: {
        env: process.env.NODE_ENV || "production",
        port: parseInt(process.env.PORT as unknown as string) || 8080,
    },
    api: {
        gretting: () =>
            `Server up and running on port ${Configuration.globals.port}`,
        apiVersion: "/api/v1",
    },
};

export default Configuration;
