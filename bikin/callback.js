const testCallback = (task, callback) => {
    console.log("TAsk saya yaitu: "+task);
    callback();
}

const fungsiCallback = () => {
    console.log("Task saya sekarang sudah selesai")
}
testCallback("Mengajar", fungsiCallback);