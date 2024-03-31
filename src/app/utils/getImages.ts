function getImages(path: string[]) {
	return path.map((v) => `/${v}`);
}

export default getImages;
