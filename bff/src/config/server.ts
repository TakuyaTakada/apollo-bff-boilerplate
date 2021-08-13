export const server = {
    publicHostname: process.env.BFF_PUBLIC_HOSTNAME || "localhost",
    privateHostname: process.env.BFF_PRIVATE_HOSTNAME || "localhost",
    port: parseInt(process.env.BFF_PORT || "8080"),
};