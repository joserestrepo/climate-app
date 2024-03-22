import React from "react";
import { InfoCardProps } from "./types/InfoCard.type";
export default function InfoCard({ Icon, title, text }: InfoCardProps) {
  return (
    <div
      className="w-full bg-very-dark-desaturated-blue flex 
                    items-center gap-8 px-8 rounded-lg"
    >
      <span className="text-3xl">
        <Icon data-testid="info-card-icon" />
      </span>
      <div className="flex justify-center flex-col">
        <h2 className="text-sm text-gray-400">{title}</h2>
        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
}
