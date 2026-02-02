import Image from "next/image";
import { Calendar, Clock, Users, Bus, UserCheck, Ticket, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tour } from "@/types/tour";

export function TourCard({ tour }: { tour: Tour }) {
    return (
        <Card className="flex flex-col md:flex-row bg-white rounded-3xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 p-4 gap-6">
            {/* Image */}
            <div className="relative w-full md:w-72 h-64 md:h-auto shrink-0 rounded-2xl overflow-hidden">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                />
            </div>

            {/* Content */}
            <CardContent className="flex flex-1 flex-col justify-between py-2 p-0">
                <div>
                    <h3 className="font-display text-2xl font-bold text-black mb-6">{tour.title}</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
                        {/* Column 1 */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span className="font-bold">Date:</span>
                                <span>{tour.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Clock className="w-5 h-5 text-primary" />
                                <span className="font-bold">Time:</span>
                                <span>{tour.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Users className="w-5 h-5 text-primary" />
                                <span className="font-bold">Family Plan:</span>
                                <span>{tour.groupSize}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Bus className="w-5 h-5 text-primary" />
                                <span className="font-bold">Transportation:</span>
                                <span>{tour.transportation}</span>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Clock className="w-5 h-5 text-primary" />
                                <span className="font-bold">Duration:</span>
                                <span>{tour.duration}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <UserCheck className="w-5 h-5 text-primary" />
                                <span className="font-bold">Guide Service:</span>
                                <span>{tour.guideService}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Languages className="w-5 h-5 text-primary" />
                                <span className="font-bold">Language:</span>
                                <span>{tour.language}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Ticket className="w-5 h-5 text-primary" />
                                <span className="font-bold">Entry Fees:</span>
                                <span>{tour.entryFees}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>

            {/* Price & Action */}
            <div className="flex flex-col justify-between items-start md:items-end py-2 gap-4 md:pl-6 md:border-l border-gray-100 min-w-[200px]">
                <div className="text-xl font-bold text-gray-900">
                    from <span className="text-3xl text-primary">{tour.price} €</span>
                </div>

                <div className="flex flex-col gap-3 w-full sm:w-auto mt-auto">
                    <Button variant="outline" className="rounded-full px-8 py-6 text-primary border-primary hover:bg-primary/5 hover:text-primary font-bold text-lg">
                        View Details
                    </Button>
                    <Button className="rounded-full px-8 py-6 bg-primary hover:bg-orange-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                        Book Now
                    </Button>
                </div>
            </div>
        </Card>
    );
}
