import React from "react"

export interface weatherDataObject {
    sys: {
        country: string
    },
    coord: {
        lat: number,
        lon: number
    },
    main: {
        temp: number,
        pressure: number,
        humidity: number
    },
    wind: {
        speed: number,
        deg: number
    },
}

export interface inputProps {
    onToggle: () => void,
    unit: string,
    inputValue: string,
    onValidation: () => void,
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
}

export interface outputProps extends weatherDataObject{
    unit: 'metric' | 'imperial'
}