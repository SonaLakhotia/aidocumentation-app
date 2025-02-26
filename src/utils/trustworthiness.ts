export const calculateTrustworthyScore = (stepsData, filledData) => {
    let allKeys = [];

    stepsData.forEach(step => {
        step.fields.forEach(field => {
            allKeys.push(field.key);
        });
    });

    let totalFields = allKeys.length;

    let filledFields = allKeys.filter(key => {
        let value = filledData[key];

        if (typeof value === "string") {
            return value.trim() !== "";
        }

        return value !== undefined && value !== null;
    }).length;

    return totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
  }
