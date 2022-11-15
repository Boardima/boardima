import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function UserChart() {

    const data = [
        {
            "name": "UOC",
            "user": 1000,
        },
        {
            "name": "UOM",
            "user": 3000,
        },
        {
            "name": "USJ",
            "user": 2000,
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
                <Bar dataKey="user" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

export default UserChart;