export const isValidLatitude = (value: string): boolean => {
    // Validate that the input is a number within the valid range for latitude
    const numericValue = Number(value);
    return value !== '' && !isNaN(numericValue) && numericValue >= -90 && numericValue <= 90;
};

export const isValidLongitude = (value: string): boolean => {
    // Validate that the input is a number within the valid range for longitude
    const numericValue = Number(value);
    return value !== '' && !isNaN(numericValue) && numericValue >= -180 && numericValue <= 180;
};