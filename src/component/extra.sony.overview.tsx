"use client";

import {
    Filter,
    ShoppingCart,
    Package,
    CreditCard,
    ChevronDown,
} from "lucide-react";

type Product = {
    name: string;
    price: string;
    revenue: string;
    earnings: string;
};

type Activity = {
    title: string;
    desc: string;
    time: string;
    icon: React.ReactNode;
};

const products: Product[] = [
    {
        name: "Smart LED Desk Lamp",
        price: "$45",
        revenue: "$4,500",
        earnings: "$1,350",
    },
    {
        name: "Ergonomic Office Chair",
        price: "$150",
        revenue: "$15,000",
        earnings: "$4,500",
    },
    {
        name: "Vacuum Cleaner",
        price: "$150",
        revenue: "$15,000",
        earnings: "$4,500",
    },
    {
        name: "Minimalist Coffee Table",
        price: "$200",
        revenue: "$20,000",
        earnings: "$6,000",
    },
];

const activities: Activity[] = [
    {
        title: "Order ID 23456 created",
        desc: "Michael Anderson • 3 Items • $250.00",
        time: "2 min ago",
        icon: <ShoppingCart size={16} />,
    },
    {
        title: "Low Stock Alert",
        desc: "Product ‘Modern Chair’ • 9 items remaining",
        time: "15 min ago",
        icon: <Package size={16} />,
    },
    {
        title: "Payment Received",
        desc: "Stripe • Invoice INNV-9481",
        time: "2 hrs ago",
        icon: <CreditCard size={16} />,
    },
];

export default function OverView() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 items-start">

            {/* ================= TOP PRODUCTS ================= */}
            <div className="border border-[#D3DCE3] rounded-lg px-4 py-6 bg-white self-start">
                <div className="mb-4">
                    <h2 className="text-[18px] text-[#161A21]">Top Products</h2>
                    <p className="text-sm text-[#697586]">
                        Best selling products this period
                    </p>
                </div>

                <div className="flex gap-3 mb-4">
                    <button className="flex items-center gap-1 border border-[#3C87E9] text-[#3C87E9] rounded-full px-4 py-2 text-sm">
                        Sort By <ChevronDown size={16} />
                    </button>

                    <button className="flex items-center gap-1 border border-black rounded-full px-4 py-2 text-sm">
                        Filter <Filter size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-4 text-center text-sm">
                    <div className="font-semibold py-2">Name</div>
                    <div className="font-semibold py-2">Price</div>
                    <div className="font-semibold py-2">Revenue</div>
                    <div className="font-semibold py-2">Earnings</div>

                    {products.map((p, i) => (
                        <div key={i} className="contents">
                            <div className="py-2">{p.name}</div>
                            <div className="py-2">{p.price}</div>
                            <div className="py-2">{p.revenue}</div>
                            <div className="py-2">{p.earnings}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= RECENT ACTIVITY ================= */}
            <div className="border border-[#D3DCE3] rounded-lg p-6 bg-white self-start">
                <div className="mb-3">
                    <h2 className="text-[18px] text-[#161A21]">Recent Activity</h2>
                    <p className="text-sm text-[#697586]">
                        Latest orders, alerts and system events
                    </p>
                </div>

                <div className="space-y-3">
                    {activities.map((item, i) => (
                        <div key={i} className="bg-[#F7F7F7] rounded-lg px-3 py-2 flex gap-3">
                            <div className="w-5 h-5 mt-1">{item.icon}</div>

                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <p className="text-sm">{item.title}</p>
                                    <span className="text-xs">{item.time}</span>
                                </div>
                                <p className="text-xs">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= CUSTOMER ================= */}
            <div className="border border-[#D3DCE3] rounded-lg p-6 bg-white self-start">
                <div className="mb-4">
                    <h2 className="text-[18px] text-[#161A21]">Customer Engagement</h2>
                    <p className="text-sm text-[#697586]">
                        New vs returning customers
                    </p>
                </div>

                <div className="flex justify-between text-center">
                    <div className="flex-1">
                        <p className="font-semibold">Returning</p>
                        <h3 className="text-2xl font-bold">2,140</h3>
                        <p className="text-sm">54% of total customers</p>
                    </div>

                    <div className="flex-1">
                        <p className="font-semibold">New</p>
                        <h3 className="text-2xl font-bold">842</h3>
                        <p className="text-sm">+6.2% vs last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
