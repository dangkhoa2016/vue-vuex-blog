export const functions = {
    ext_RandomCount() {
        return Math.floor(Math.random() * (100 + 1));
    },
    ext_BgImage(image) {
        if (!image)
            return '';

        return "background-image: url('" + image + "')";
    },
}