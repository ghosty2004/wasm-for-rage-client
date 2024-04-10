use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = ["mp", "gui", "chat"], js_name = "push")]
    fn push_message(s: &str);
}

#[wasm_bindgen(start)]
pub fn run() {
    for i in 0..10 {
        push_message(&format!("Hello from Rust {}", i));
    }
}
