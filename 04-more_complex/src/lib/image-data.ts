export const getImageData = async (file: File): Promise<ImageData> => {
    const img = await createImageBitmap(file);
    // Make canvas same size as image
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw image onto canvas
    const ctx = canvas.getContext('2d');

    if (ctx) {
        ctx.drawImage(img, 0, 0);
        return ctx.getImageData(0, 0, img.width, img.height);
    } else {
        throw new Error("Could not create canvas");
    }
}
