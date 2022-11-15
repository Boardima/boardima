import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function UniChart() {

    const data = [
        {
            "name": "UOC",
            "uni": 4000,
        },
        {
            "name": "UOM",
            "uni": 3000,
        },
        {
            "name": "USJ",
            "uni": 2000,
        },
    ]

    return (
        <div>
            
            <BarChart width={450} height={480} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uni" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default UniChart;