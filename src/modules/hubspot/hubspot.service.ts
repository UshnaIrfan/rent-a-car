import { Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from 'axios';
import {CreateHubspotDto} from "./dto/create-hubspot.dto";
import { UpdateHubspotDto } from "./dto/update-hubspot.dto";

@Injectable()
export class HubspotService {
  constructor(private readonly configService: ConfigService
  ) {}



    // create
    async hubspotContact(hubspotContact: CreateHubspotDto)
    {
          try
          {
            const response = await axios.post(this.configService.get("HUBSPOT_ACCESS_APIURL"), hubspotContact, {
              headers: {
                Authorization: `Bearer ${this.configService.get('HUBSPOT_ACCESS_TOKEN')}`,
                'Content-Type': 'application/json',
              },
            });
               return response.data;
          }
          catch (error)
          {
               throw new Error('Failed to create contact using HubSpot API');
          }
    }




       // get all
        async getContacts()
        {
            try
            {
              const response = await axios.get(this.configService.get("HUBSPOT_ACCESS_APIURL"), {
                headers: {
                  Authorization: `Bearer ${this.configService.get("HUBSPOT_ACCESS_TOKEN")}`,
                  'Content-Type': 'application/json',
                },
              });
                return response.data;
            }
            catch (error)
            {
                 throw new Error('Failed to fetch contacts from HubSpot API');
            }
        }





      // get data form email
      async getHubspotContactByEmail(email: string)
      {
          try {
            const url = `${this.configService.get("HUBSPOT_ACCESS_APIURL")}`;
            const response = await axios.get(url, {
              headers: {
                Authorization: `Bearer ${this.configService.get("HUBSPOT_ACCESS_TOKEN")}`,
              },
              // params: {
              //   propertyName: "email",
              //   value: email,
              // },
            });

            const contacts = response.data.results;
            const contactWithEmail =  await contacts.find((contact: any) => {
              return contact.properties.email === email
            });

            if (!contactWithEmail)
            {
              return { message: 'Contact not found in HubSpot', data: null };
            }
            return contactWithEmail;
          }
          catch (error)
          {
              throw new Error(" Failed to find contact in HubSpot API");
          }
      }







        // delete data
        async  deleteHubspotContactByEmail(email: string)
        {
            try
            {
                const url = `${this.configService.get("HUBSPOT_ACCESS_APIURL")}`;
                const response = await axios.get(url, {
                  headers: {
                    Authorization: `Bearer ${this.configService.get("HUBSPOT_ACCESS_TOKEN")}`,
                  },
                });

                const contacts = response.data.results;
                const contactWithEmail =  await contacts.find((contact: any) => {
                  return contact.properties.email === email
                });
                if (!contactWithEmail)
                {
                    return { message: 'Contact not found in HubSpot', data: null };

                }

                const deleteUrl = `${this.configService.get("HUBSPOT_ACCESS_APIURL")}/${contactWithEmail.id}`;
                await axios.delete(deleteUrl, {
                  headers: {
                      Authorization: `Bearer ${this.configService.get("HUBSPOT_ACCESS_TOKEN")}`,
                    },
                  });

               return { message: "successfully deleted" ,contactWithEmail};

              }
              catch (error)
              {
                  throw new Error("Failed to find or delete contact in HubSpot API");
              }
        }





     // update data
    async updateHubspotContactByEmail(id: string, updateData: UpdateHubspotDto)
    {
        try
        {
            const url = `${this.configService.get('HUBSPOT_ACCESS_APIURL')}`;
            const response = await axios.get(url, {
              headers: { Authorization: `Bearer ${this.configService.get('HUBSPOT_ACCESS_TOKEN')}`, }});

            const contacts = response.data.results;
            const contactWithId = contacts.find((contact: any) => contact.id === id);
            if (!contactWithId)
            {
                return { message: 'Contact not found in HubSpot', data: null };
            }

            const updateUrl = `${this.configService.get('HUBSPOT_ACCESS_APIURL')}/${contactWithId.id}`;
            const updateResponse = await axios.patch(updateUrl, updateData, {
              headers: {
                Authorization: `Bearer ${this.configService.get('HUBSPOT_ACCESS_TOKEN')}`,
                'Content-Type': 'application/json',
              },
            });

            return { message: 'Contact updated successfully', data: updateResponse.data };
          }
          catch (error)
          {
               throw new Error('Failed to find or update contact in HubSpot API');
          }

    }



}
