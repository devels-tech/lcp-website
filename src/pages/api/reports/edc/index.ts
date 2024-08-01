import { NextApiRequest, NextApiResponse } from 'next'
import { format } from '@formkit/tempo'

import { getEventInscriptionsEDC } from '@/lib/services/firebase/utils/getData'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const data = await getEventInscriptionsEDC()

  return res.status(200).json({
    result: {
      data: data.docs.map(item => {
        let fullData = item.data()

        if (!fullData?.level) {
          fullData = {
            ...fullData,
            level: null
          }
        }

        if (!fullData?.email) {
          fullData = {
            ...fullData,
            email: null
          }
        }

        const dateBirth = format(fullData.dateBirth, 'DD MMMM YYYY', 'es')

        console.log({ dateBirth })

        return {
          ...fullData,
          dateBirth
        }
      })
    }
  })
}