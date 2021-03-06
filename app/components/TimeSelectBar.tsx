import { Button, HStack, Select, Text } from "@chakra-ui/react"
import { Form } from "remix"
import { FormTitleResponse, getOptions } from "~/utils/form"

export function TimeSelectBar({
  title,
  yearInput,
  monthInput,
}: FormTitleResponse) {
  return (
    <Form method="post">
      <HStack border={"2px"} p={5}>
        <label>
          Time Period:
          <Select
            placeholder=" "
            name="month"
            defaultValue={Number(monthInput)}
          >
            {getOptions("MONTH_PERIOD")}
          </Select>
        </label>
        <label>
          Year:
          <Select placeholder=" " name="year" defaultValue={yearInput}>
            {getOptions("YEAR")}
          </Select>
        </label>
        <Button type="submit">OK</Button>
        <Text>{title ?? "no title"}</Text>
      </HStack>
    </Form>
  )
}
