'use server'

import { db } from '@/db'
import { leads } from '@/db/schema'
import { revalidatePath } from 'next/cache'

export async function submitLead(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string

  await db.insert(leads).values({ name, email, phone })
  revalidatePath('/')
}
