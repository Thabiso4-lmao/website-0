// Bluetooth button click
document.getElementById("bluetoothBtn").addEventListener("click", async () => {
  try {
    // Ask user to select a nearby Bluetooth device
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ["battery_service"] // Arduino UUIDs can be added here
    });

    console.log("Connected to device:", device.name);

    document.getElementById("device-info").innerText =
      "Connected to: " + (device.name || "Unknown device");

  } catch (error) {
    console.error("Bluetooth error:", error);
    document.getElementById("device-info").innerText =
      "Bluetooth access failed: " + error;
  }
});