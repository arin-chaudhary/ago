import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 w-full md:w-[300px]">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
        {title}
      </h3>

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
      )}

      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
        {description}
      </p>
    </div>
  );
}
