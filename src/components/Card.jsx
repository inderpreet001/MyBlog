import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Card Component
 *
 * @returns A Card Component Object
 */
export default function Card({ title, description, date }) {
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };
  const CardContainer = styled.div`
    min-height: 200px;
    min-width: 200px;
    max-width: 300px;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    margin: 10px;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    transition: border 0.2s ease-out;

    &:hover {
      border: 1px solid Green;
    }
  `;

  const CardHeading = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
  `;

  const CardDescription = styled.div`
    font-size: 16px;
    color: #787276;
    margin-top: 20px;
  `;

  const Date = styled.div`
    font-size: 12px;
    text-align: end;
    margin-top: 20px;
  `;

  return (
    <>
      <CardContainer>
        <CardHeading>{title}</CardHeading>
        <CardDescription>{description}</CardDescription>
        <Date>{date}</Date>
      </CardContainer>
    </>
  );
}
