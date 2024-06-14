import React, { useState, useLayoutEffect } from "react"
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api"

const API_KEY = "AIzaSyBmK_VqhL79BrOPu8HZ3IOQ0kr9Tu39KSU"

interface Place {
  position: google.maps.LatLngLiteral
  content: string
}

const BlogDetailMap = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)

  useLayoutEffect(() => {
    geocodeAddress("156 Fumoto, Fujinomiya, Shizuoka 418-0109")
  }, [])

  const geocodeAddress = (address: string) => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps JavaScript API is not loaded.")
      return
    }

    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        setSelectedPlace({
          position: {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          },
          content: address,
        })
      } else {
        console.error("Geocoding failed:", status)
        setSelectedPlace(null)
      }
    })
  }

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={selectedPlace ? selectedPlace.position : { lat: 37.5665, lng: 126.978 }}
        zoom={12}
      >
        {selectedPlace && (
          <Marker position={selectedPlace.position}>
            <InfoWindow onCloseClick={() => setSelectedPlace(null)}>
              <div>
                <h3>{selectedPlace.content}</h3>
              </div>
            </InfoWindow>
          </Marker>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default BlogDetailMap
