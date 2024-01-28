import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminCard = (props: any) => {
  return (
    <>
      <Card className="m-32 min-w-64">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{props.content}</p>
        </CardContent>
        <CardFooter>
          <Link href={props.link}>
            <Button variant="outline">Visit</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default AdminCard;
