export const getPositions = (id: string) => {
    switch(id){
        case "1":
            return (d: any) => [Number(d.longitude), Number(d.latitude)];
            case "2":
                return (d: any) => [Number(d.longitude), Number(d.latitude)];
                default: 
                throw new Error(`No data found for ${id}`);
    }
}