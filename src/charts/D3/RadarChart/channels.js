import FieldType from '@/constants/FieldType';

const channels = {
    x: {
        name: 'x',
        type: [ FieldType.TEMPORAL], // FieldType.NOMINAL, FieldType.ORDINAL,
        isEncoding: false,
    },
    y: {
        name: 'y',
        type: [FieldType.QUANTITATIVE],
        aggregation: 'average',
        isEncoding: false,
    },
    color: {
        name: 'color',
        type: [FieldType.NOMINAL, FieldType.ORDINAL, FieldType.TEMPORAL],
        isEncoding: false,
    },
    // time: {
    //     name: 'time',
    //     type: [FieldType.NOMINAL, FieldType.ORDINAL, FieldType.TEMPORAL],
    //     animation: true,
    // }
};

export default channels;