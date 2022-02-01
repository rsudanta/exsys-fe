export const intepretationValue = (value) => {
    if (value === 1) {
        return 'Pasti'
    }
    if (value >= 0.8 && value < 1) {
        return 'Hampir Pasti'
    }
    if (value >= 0.6 && value < 0.8) {
        return 'Kemungkinan Besar'
    }
    if (value > 0 && value < 0.6) {
        return 'Mungkin'
    }
};