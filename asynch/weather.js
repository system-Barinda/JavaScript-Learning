class WeatherReading {
  constructor(id, location, temperature, humidity, pressure, windSpeed, timestamp = Date.now()) {
    this.id = id;
    this.location = location;
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.windSpeed = windSpeed;
    this.timestamp = timestamp;
  }

  getTemperatureInFahrenheit() {
    return (this.temperature * 9/5) + 32;
  }

  toString() {
    return `Weather Reading [ID: ${this.id}]
Location: ${this.location}
Temperature: ${this.temperature}°C (${this.getTemperatureInFahrenheit()}°F)
Humidity: ${this.humidity}%
Pressure: ${this.pressure} hPa
Wind Speed: ${this.windSpeed} km/h
Timestamp: ${new Date(this.timestamp).toLocaleString()}`;
  }
}

class Location {
  constructor(name, latitude, longitude, timezone) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.timezone = timezone;
    this.readings = [];
  }

  // ✅ Haversine formula for distance in km
  static calculateDistance(loc1, loc2) {
    const toRad = (deg) => (deg * Math.PI) / 180;
    const R = 6371; // Earth's radius in km

    const dLat = toRad(loc2.latitude - loc1.latitude);
    const dLon = toRad(loc2.longitude - loc1.longitude);

    const lat1 = toRad(loc1.latitude);
    const lat2 = toRad(loc2.latitude);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // distance in km
  }

  // ✅ Factory method
  static fromCoordinates(lat, lng, name, timezone = "UTC") {
    return new Location(name, lat, lng, timezone);
  }

  // ✅ Add reading and keep sorted by timestamp
  addReading(reading) {
    this.readings.push(reading);
    this.readings.sort((a, b) => a.timestamp - b.timestamp);
  }
}

// ------------------
// ✅ Test Cases
// ------------------

const nyc = new Location("New York", 40.7128, -74.006, "EST");
const la = new Location("Los Angeles", 34.0522, -118.2437, "PST");

const distance = Location.calculateDistance(nyc, la);
console.log(distance > 2000); // Expected: true 

const miami = Location.fromCoordinates(25.7617, -80.1918, "Miami");
console.log(miami); // Expected: "Miami"

const reading = new WeatherReading(1, "New York", 25, 60, 1013, 15);
const reading1 = new WeatherReading(2, "kigali", 25, 60, 1013, 15);
nyc.addReading(reading);
nyc.addReading(reading1);
console.log(nyc.readings); // Expected: 1
    