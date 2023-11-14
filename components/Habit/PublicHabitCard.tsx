import { Habit } from '@/types/Habit'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'
import HabitCheck from './HabitCheck'
import formatStartDate from '@/services/formatStartDate'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function PublicHabitCard({habit} : {habit : Habit}) {

  const startDate = formatStartDate(habit.habitLogs[0].date)

  
  return (
    <Card className="w-[40%] py-4">
      <CardHeader>
        <div className="flex flex-row items-center space-x-2">
            <Avatar className="border-primary border-2">
                <AvatarImage src={habit.user?.image || ""} />
            </Avatar>
            <p className='font-bold'>
                {habit.user?.name}
            </p>
        </div>
        <CardTitle className="capitalize">{habit.action}</CardTitle>
        Started at {startDate}
        <CardDescription className="my-4">
          {/* Habit check grid */}
          <div className="flex flex-row space-x-2">
          {habit?.habitLogs?.map((habitLog, index, array) => (
            <HabitCheck key={index} log={habitLog} isLast={index === array.length - 1} />
          ))}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
