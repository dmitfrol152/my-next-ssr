export function getHelloMessage() {
	return { message: "Hello, from shared module!" };
}

export function createHelloMessage(name) {
	return { message: `Hello ${name}, from hared module!` };
}
