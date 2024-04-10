export default function TextDecoder() {
    this.decode = function (buffer = new Uint8Array()) {
        let result = "";
        let i = 0;

        while (i < buffer.length) {
            const byte = buffer[i];

            if (byte < 0x80) {
                result += String.fromCharCode(byte);
                i++;
            } else if (byte < 0xe0) {
                result += String.fromCharCode(
                    ((byte & 0x1f) << 6) | (buffer[i + 1] & 0x3f)
                );
                i += 2;
            } else if (byte < 0xf0) {
                result += String.fromCharCode(
                    ((byte & 0x0f) << 12) |
                        ((buffer[i + 1] & 0x3f) << 6) |
                        (buffer[i + 2] & 0x3f)
                );
                i += 3;
            } else {
                // Unsupported encoding
                throw new Error("Unsupported UTF-8 encoding");
            }
        }

        return result;
    };
}
